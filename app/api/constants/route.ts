import { NextRequest, NextResponse } from "next/server";
import constants from "@/data/constants.json";

export async function GET(_req: NextRequest) {
  console.log("Fetching constants data...", _req);
  return NextResponse.json(constants);
}