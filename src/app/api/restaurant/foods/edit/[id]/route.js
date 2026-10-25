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

export async function PUT(request,{params}){
    try {
        await connectDB()
        const resolvedParams = await params
        const id = resolvedParams.id 
        let success = false
        const payload = await request.json()
        const result = await foodSchema.findOneAndUpdate({_id:id},payload)
        if(result) {
            return NextResponse.json({ result, success: true, message: "Food update successfully" })
        } else {
            return NextResponse.json({ success: false, message: "Food item not found" }, { status: 404 })
        }
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }
}