// /app/api/lessons/route.js
import { NextResponse } from "next/server";
import lessons from "@/data/lessons.json";

export async function GET(req) {
  console.log("Fetching lessons data...", req);
  return NextResponse.json(lessons);
}
