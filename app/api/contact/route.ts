import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log("Contact submission:", body);

    return NextResponse.json({
      success: true,
      message: "Message submitted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Submission failed",
      },
      { status: 500 }
    );
  }
}
