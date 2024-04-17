import connectMongoDB from "@/lib/mongodb";
import Laws from "@/models/laws";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const laws = await Laws.find();
    return NextResponse.json({laws});
}