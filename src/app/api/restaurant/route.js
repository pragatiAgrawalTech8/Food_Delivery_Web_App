import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";

export async function GET() {
  try {
    await connectDB();                         
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

export async function POST(request){
  await connectDB(); 
  let payload = await request.json()
  console.log(payload);
  const restaurant = await restaurantSchema.create(payload)
    return NextResponse.json({result:true,data:restaurant})
}