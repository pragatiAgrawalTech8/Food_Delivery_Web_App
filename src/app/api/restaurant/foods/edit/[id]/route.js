import { connectDB } from "@/app/lib/db"
import { NextResponse } from "next/server"
import { foodSchema } from "@/app/lib/foodsModel"
export async function GET(request,{params}){
    await connectDB()
    const resolvedParams = await params
    const id = resolvedParams.id
    let success =false
    const result = await foodSchema.findOne({_id:id})
    if(result){
        success = true
    }
    return NextResponse.json({result,success})
}