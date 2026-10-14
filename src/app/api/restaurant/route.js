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

export async function POST(request) {
  try {
    await connectDB();
    let payload = await request.json();
    let result;

    if (payload.login) {
      // 🔐 Login flow
      result = await restaurantSchema.findOne({
        email: payload.email,
        password: payload.password
      });
    } else {
      // 📝 Signup flow
      const restaurant = new restaurantSchema(payload);
      result = await restaurant.save();
    }

    return NextResponse.json({data:result, success: true });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}