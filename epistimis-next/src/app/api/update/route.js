import connectMongoDB from "@/lib/mongodb";
import Laws from "@/models/laws";
import usLaws from "@/models/uslaws";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const us = await usLaws.find();
    return NextResponse.json({us});
}