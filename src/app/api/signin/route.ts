import { signinMock } from "@/services/signin";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { email, password } = body;

    const logged = await signinMock(email, password);

    if (!logged) {
        return NextResponse.json({ success: false });
    }

    // Set cookies
    const cookiesHandler = await cookies();
    cookiesHandler.set("isLogged", "ok");
    const username = {
        name: "Jose Galdamez",
        email: "demo@demo.com",
        avatar: "/avatars/01.png",
    };
    cookiesHandler.set("username", JSON.stringify(username));

    return NextResponse.json({ success: true });
}
