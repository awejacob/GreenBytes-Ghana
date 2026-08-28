import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { contactEnquiries } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, email, organization, enquiryType, message } = body;

    if (!fullName || !phone || !enquiryType || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    await db.insert(contactEnquiries).values({
      fullName,
      phone,
      email: email || null,
      organization: organization || null,
      enquiryType,
      message,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try again." },
      { status: 500 }
    );
  }
}
