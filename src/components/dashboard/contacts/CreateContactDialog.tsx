'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createNewContact } from "@/server/database/contacts"
import { useState } from "react"

interface CreateContactDialogProps {
    getContacts: () => Promise<void>
}

export function CreateContactDialog({ getContacts }: CreateContactDialogProps) {

    const [information, setInformation] = useState({
        name: "",
        last_name: "",
        phone: "",
        email: "",
        age: 0,
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);

    const handleSaveNewContact = async () => {
        setLoading(true);
        await createNewContact(information);
        await getContacts();

        setInformation({
            name: "",
            last_name: "",
            phone: "",
            email: "",
            age: 0,
        })

        setLoading(false);
        setShow(false);
    }

    return (
        <Dialog open={show} onOpenChange={setShow}>
            <DialogTrigger asChild>
                <Button>Crear nuevo contacto</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Crear nuevo contacto</DialogTitle>
                    <DialogDescription>
                        Agrega un contacto a tu lista de contactos.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Nombre
                        </Label>
                        <Input id="name" value={information.name} onChange={(e) => {
                            setInformation({
                                ...information,
                                name: e.target.value
                            })
                        }} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Apellido
                        </Label>
                        <Input id="last_name" value={information.last_name} onChange={(e) => {
                            setInformation({
                                ...information,
                                last_name: e.target.value
                            })
                        }} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Teléfono
                        </Label>
                        <Input id="phone" value={information.phone} onChange={(e) => {
                            setInformation({
                                ...information,
                                phone: e.target.value
                            })
                        }} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Correo
                        </Label>
                        <Input id="email" value={information.email} onChange={(e) => {
                            setInformation({
                                ...information,
                                email: e.target.value
                            })
                        }} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Edad
                        </Label>
                        <Input id="age" value={information.age} onChange={(e) => {
                            setInformation({
                                ...information,
                                age: Number(e.target.value)
                            })
                        }} className="col-span-3" type="number" />
                    </div>
                </div>
                <DialogFooter>
                    <Button disabled={loading} type="button" onClick={handleSaveNewContact}>
                        {loading ? "Guardando..." : "Guardar cambios"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
