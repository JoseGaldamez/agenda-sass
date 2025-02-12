import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
    // Set cookies
    const cookiesHandler = await cookies();
    cookiesHandler.delete("isLogged");
    cookiesHandler.delete("username");

    return NextResponse.json({ success: true });
}
