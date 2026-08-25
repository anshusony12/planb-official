import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, captchaToken, website } = body;

    // Honeypot check
    if (website) {
      return NextResponse.json(
        { success: false, message: 'Spam detected.' },
        { status: 400 }
      );
    }

    // Email validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Please enter your email.' },
        { status: 400 }
      );
    }

    // CAPTCHA validation
    if (!captchaToken) {
      return NextResponse.json(
        { success: false, message: 'Captcha verification failed.' },
        { status: 400 }
      );
    }

    // 1. Verify reCAPTCHA server-to-server with Google
    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY!,
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

    // 2. Forward clean payload to Google Apps Script
    // Next.js server automatically follows Google's 302 redirect transparently
    const sheetRes = await fetch(process.env.NEXT_PUBLIC_NOTIFY_ME_FORM_ENDPOINT!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const result = await sheetRes.json();
    return NextResponse.json(result);

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}