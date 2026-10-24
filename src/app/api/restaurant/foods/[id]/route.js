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

export async function DELETE(request, { params }) {
    try {
        await connectDB()
        const resolvedParams = await params
        const id = resolvedParams.id // URL से आने वाली Food की असली ID

        // _id से उस खाने को डिलीट करें
        const result = await foodSchema.deleteOne({ _id: id })

        if (result.deletedCount > 0) {
            return NextResponse.json({ result, success: true, message: "Food deleted successfully" })
        } else {
            return NextResponse.json({ success: false, message: "Food item not found" }, { status: 404 })
        }
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }
}