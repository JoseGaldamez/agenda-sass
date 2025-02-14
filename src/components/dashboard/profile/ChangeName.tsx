'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { toast } from '@/hooks/use-toast';
import { changeDisplayName } from '@/server/auth/login/actions';
import React, { useState } from 'react'


interface ChangeNameProps {
    displayName: string
}

export const ChangeName = ({ displayName }: ChangeNameProps) => {

    const [name, setName] = useState(displayName);

    const handleChangeName = async () => {
        await changeDisplayName(name);
        toast({
            title: "Cambio de nombre realizado",
            description: "El cambio de nombre se ha realizado correctamente",
        })
    }

    return (
        <div>
            <h2>Cambiar nombre</h2>
            <Input className='mt-3' type="text" value={name} onChange={(e) => {
                setName(e.target.value)
            }} placeholder="Nuevo Display Name" />
            <Button className='mt-5' onClick={handleChangeName}>Guardar</Button>
        </div>
    )
}
