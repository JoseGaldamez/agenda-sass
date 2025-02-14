import { RequestResetPasswordForm } from "@/components/RequestResetPasswordForm";
import { BookOpen } from "lucide-react";

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-full max-w-sm">
                <div className="text-center mb-8">
                    <BookOpen className="h-12 w-12 mx-auto text-gray-800 mb-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">Solicitar restablecimiento de contraseña</h2>
                </div>
                <RequestResetPasswordForm />

            </div>
        </div>
    );
}