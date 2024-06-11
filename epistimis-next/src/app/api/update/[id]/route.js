import connectMongoDB from "@/lib/mongodb";
import usLaws from "@/models/uslaws";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
    // Connect to MongoDB
    await connectMongoDB();

    const id = params.id;
    const { searchParams } = request.nextUrl;
    console.log(id);
    
    const body = await request.json(); // Await the json() method
    const { updatedData } = body;
    console.log(updatedData);
    
    if (id === "uslaw") {
        const jurisdiction = searchParams.get("jurisdiction");
        if (jurisdiction === null) {
            return NextResponse.json({
                status: "fail",
                message: "no jurisdiction",
            });
        }

        // Update the MongoDB entry
        try {
            const result = await usLaws.findOneAndReplace(
                { jurisdiction }, // Find criteria
                updatedData, // Replacement data
                { new: true } // Return the new document
            );

            if (result) {
                return NextResponse.json({
                    status: "success",
                    message: `API update for jurisdiction: ${jurisdiction}`,
                    data: result
                });
            } else {
                return NextResponse.json({
                    status: "fail",
                    message: "No matching document found",
                });
            }
        } catch (error) {
            console.error("Error updating MongoDB entry:", error);
            return NextResponse.json({
                status: "fail",
                message: "Error updating document",
            });
        }
    } else {
        return NextResponse.json({
            status: "fail",
            message: "Failed to update",
        });
    }
}
