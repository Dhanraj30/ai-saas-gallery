import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const videos = await prisma.video.findMany({
            orderBy: {createdAt: "desc"}
        });
        return NextResponse.json(videos);
    } catch (error) {
        console.log("Failed to fetch videos", error);
        return NextResponse.json({ message: "Failed to fetch videos" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

