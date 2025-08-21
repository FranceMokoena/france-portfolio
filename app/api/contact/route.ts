import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Use a simple email service - you can replace this with your preferred service
    // For now, we'll use a webhook that forwards to email
    // You can set up services like:
    // 1. Webhook.site (free) - forwards to email
    // 2. Formspree (free tier)
    // 3. Netlify Forms (free)
    // 4. EmailJS (free tier)

    const webhookUrl = process.env.WEBHOOK_URL || 'https://webhook.site/your-webhook-url';
    
    const emailData = {
      to: 'francewitness9@gmail.com',
      from: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from your portfolio website</em></p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from your portfolio website
      `
    };

    // For now, we'll simulate a successful email send
    // In production, you would integrate with a real email service
    console.log('Email data:', emailData);
    
    // Simulate email sending (replace this with actual email service)
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
