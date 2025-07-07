import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "test@gmail.com" && password === "123456") {
    return NextResponse.json({ message: "Login successful" });
  } else {
    return NextResponse.json({ message: "Invalid login" }, { status: 401 });
  }
}
