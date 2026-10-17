import { NextResponse } from "next/server"
import { connectDB } from "@/app/lib/db"
import { foodSchema } from "@/app/lib/foodsModel"

export async function POST(request) {
  try {
    await connectDB()
    const payload = await request.json()
    console.log("Food payload:", payload)

    const food = new foodSchema(payload)
    const result = await food.save()

    return NextResponse.json({ success: true, data: result })

  } catch (error) {
    console.error("POST error:", error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}