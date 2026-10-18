import { NextResponse } from "next/server"
import { connectDB } from "@/app/lib/db"
import { foodSchema } from "@/app/lib/foodsModel"
export async function GET(request,{ params }){
    await connectDB()
    const resolvedParams = await params
    const id = resolvedParams.id
    console.log(id);
    const result = await foodSchema.find({resto_id:id})
    let success = false;
    if(result){
     success=true
    }
   return NextResponse.json({result,success})
}