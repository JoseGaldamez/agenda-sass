'use client'
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'
import { resetPassword } from '@/server/auth/login/actions'
import React from 'react'

export const ChangePasswordReset = () => {

    const handleResetPassword = async () => {

        const host = window.location.origin;

        const result = await resetPassword(host);
        if (result) {
            toast({
                title: "Solicitud enviada",
                description: "Se ha enviado un correo electrónico con las instrucciones para resetear la contraseña",
            })
        } else {
            toast({
                title: "Error",
                description: "No se ha podido enviar el correo electrónico",
                variant: "destructive",
            })
        }

    }

    return (
        <div>
            <Button onClick={handleResetPassword}>Solicitar el reset de la contraseña</Button>
        </div>
    )
}
