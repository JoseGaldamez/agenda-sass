'use client';
import React, { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { signup } from '@/server/auth/login/actions';

export const RegisterForm = () => {

    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const password2 = formData.get("password2") as string;

        if (password !== password2) {
            toast({
                title: "Error",
                description: "Las contraseñas no coinciden",
                variant: "destructive",
            });
            setIsLoading(false);
            return;
        }

        const error = await signup(email, password);

        toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
        })

        setIsLoading(false);
    }

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <Input id="email" name="email" placeholder="Correo electrónico" required type="email" className="w-full" />
            <Input id="password" name="password" placeholder="Contraseña" required type="password" className="w-full" />
            <Input id="password2" name="password2" placeholder="Repita Contraseña" required type="password" className="w-full" />
            <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white" type="submit" disabled={isLoading}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Iniciar sesión"}
            </Button>

        </form>
    )
}
