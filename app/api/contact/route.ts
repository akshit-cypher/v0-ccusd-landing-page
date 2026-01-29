export async function POST(request: Request) {
  try {
    const { fullName, company, email, message } = await request.json();

    // Validate inputs
    if (!fullName || !company || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Use Resend API if available, otherwise store in logs
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (resendApiKey) {
      // Send email via Resend API
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
          to: "account@openvector.ai",
          subject: `New CCUSD Contact Form Submission from ${fullName}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email via Resend");
      }
    } else {
      // Fallback: log to console (for development)
      console.log("Contact Form Submission:", {
        fullName,
        company,
        email,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message received. We'll be in touch soon!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message" }),
      { status: 500 }
    );
  }
}
