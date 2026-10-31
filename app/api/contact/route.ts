import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedTypes = ["Website / Web App", "Android / Mobile App", "UI / UX Design", "Custom Project"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const projectType = typeof body.projectType === "string" ? body.projectType : "";
    const details = typeof body.details === "string" ? body.details.trim() : "";
    const website = typeof body.website === "string" ? body.website : "";

    if (website) return NextResponse.json({ ok: true });
    if (!emailPattern.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!allowedTypes.includes(projectType)) {
      return NextResponse.json({ error: "Please select a valid project type." }, { status: 400 });
    }
    if (details.length < 10 || details.length > 5000) {
      return NextResponse.json({ error: "Project details must be between 10 and 5,000 characters." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Enquiry delivery is not configured yet. Please try again later." }, { status: 503 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio Enquiries <onboarding@resend.dev>",
        to: ["dasbuttu1266@gmail.com"],
        reply_to: email,
        subject: `Portfolio enquiry: ${projectType}`,
        text: `New portfolio enquiry\n\nProject type: ${projectType}\nVisitor email: ${email}\n\nProject details:\n${details}`,
      }),
    });
    if (!response.ok) {
      return NextResponse.json({ error: "We couldn't send your enquiry right now. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request. Please try again." }, { status: 400 });
  }
}
