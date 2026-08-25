import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, reason, message, captchaToken, website } = body;

    // 1. Honeypot anti-spam check
    if (website) {
      return NextResponse.json(
        { success: false, message: 'Spam detected.' },
        { status: 400 }
      );
    }

    // 2. Field validation
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required.' },
        { status: 400 }
      );
    }

    // 3. Verify reCAPTCHA token with Google
    if (!captchaToken) {
      return NextResponse.json(
        { success: false, message: 'Captcha verification failed.' },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '';
    if (!secretKey) {
      console.error('RECAPTCHA_SECRET_KEY is missing from environment variables.');
      return NextResponse.json(
        { success: false, message: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: captchaToken,
      }),
    });

    const captchaData = await recaptchaRes.json();

    if (!captchaData.success || (typeof captchaData.score === 'number' && captchaData.score < 0.5)) {
      return NextResponse.json(
        { success: false, message: 'Captcha verification failed.' },
        { status: 422 }
      );
    }

    // 4. Forward clean payload to Google Apps Script
    const scriptEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || process.env.CONTACT_FORM_ENDPOINT;

    if (!scriptEndpoint) {
      console.error('Contact form endpoint URL is missing.');
      return NextResponse.json(
        { success: false, message: 'Server endpoint configuration error.' },
        { status: 500 }
      );
    }

    const sheetRes = await fetch(scriptEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone: phone || '',
        reason: reason || '',
        message: message || '',
      }),
    });

    const result = await sheetRes.json();
    return NextResponse.json(result);

  } catch (error) {
    console.error('Contact API Route Error:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to process your request.' },
      { status: 500 }
    );
  }
}