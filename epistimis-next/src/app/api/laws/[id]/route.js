import connectMongoDB from "@/lib/mongodb";
import Laws from "@/models/laws";
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    const id = params.id;

    const { searchParams } = request.nextUrl;

    if (id === "info") {
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
            const law = await Laws.findOne({ jurisdiction });
            console.log(jurisdiction)
            if (!law) {
                return NextResponse.json({
                    message: "No law found for the specified state",
                    id,
                    jurisdiction
                }, { status: 404 });
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
    } else if (id === "compare") {
        // Handle compare request
        const stateName1 = searchParams.get("jurisdiction1")
        const stateName2 = searchParams.get("jurisdiction2")

        await connectMongoDB();

        try {
            const laws = await Laws.find({ jurisdiction: { $in: [stateName1, stateName2] } });

            if (!laws || laws.length === 0) {
                return NextResponse.json({
                    status: "fail",
                    message: "No laws found for the specified states",
                });
            }

            return NextResponse.json({
                status: "success",
                message: `API called for states: ${stateName1} and ${stateName2}`,
                data: { laws },
            });
        } catch (err) {
            console.error("Error:", err);
            return NextResponse.json({
                status: "fail",
                message: "Failed to retrieve law information",
            });
        }
    } 
    else {
        return NextResponse.json({message: 'Hello, Next.js', id, jurisdiction})
    }
}