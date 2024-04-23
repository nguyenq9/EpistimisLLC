import connectMongoDB from "@/lib/mongodb";
import Laws from "@/models/laws";
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    const id = params.id;
    if (id !== "info") {
        return NextResponse.json(
            {
                error: 'Internal Server Error: id'
            },
            {
                status: 500
            }
        )
    }

    const { searchParams } = request.nextUrl;
    const jurisdiction = searchParams.get("jurisdiction")

    if (jurisdiction === null) {
        return NextResponse.json(
            {
                error: 'Internal Server Error: jurisdiction'
            },
            {
                status: 500
            }
        )
    }
    await connectMongoDB();

    try {
        const law = await  Laws.findOne({ jurisdiction });
        console.log(jurisdiction)
        if (!law) {
            return NextResponse.json({
                message: "No law found for the specified state",
                id, 
                jurisdiction
            }, {status: 404});
        }

        return NextResponse.json({
            status: "success",
            message: `API called for jurisdiction: ${jurisdiction}`,
            data: {
                law
            }
        });
        
    } catch (err) {
        console.error("Error:", err);
        return NextResponse.json(
            {
                error: 'Failed to retrieve law information'
            },
            {
                status: 400
            }
        )
    }
    
    return NextResponse.json({message: 'Hello, Next.js', id, jurisdiction})
}