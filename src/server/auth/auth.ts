"use server";
import { signinMock } from "@/services/signin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signinAction = async (email: string, password: string) => {
    const logged = await signinMock(email, password);

    if (!logged) {
        return false;
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

    redirect("/dashboard");
};

export const signoutAction = async () => {
    // Delete cookies
    const cookiesHandler = await cookies();
    cookiesHandler.delete("isLogged");
    cookiesHandler.delete("username");

    redirect("/");
};
