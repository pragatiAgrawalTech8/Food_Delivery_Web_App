import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";

export async function GET() {
  try {
    await connectDB();                         // 👈 ye use karo
    const data = await restaurantSchema.find();
    console.log(data);
    return NextResponse.json({ result: true, data });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { result: false, error: error.message },
      { status: 500 }
    );
  }
}