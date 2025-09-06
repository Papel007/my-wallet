import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Wallet from "@/models/Wallet";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const wallet = await Wallet.create(body);

    return NextResponse.json({ success: true, wallet });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
