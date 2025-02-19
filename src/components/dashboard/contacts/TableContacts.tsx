'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"

import { ContactModel } from "@/models/contact.model"
import { getAllContacts, getAllContactsFavorites, updateContactFavorite } from "@/server/database/contacts";
import { useEffect, useState } from "react";
import { CreateContactDialog } from "./CreateContactDialog";
import { Star } from "lucide-react";
import { DeleteContactDialog } from "./DeleteContactDialog";

interface TableContactsProps {
    id: string,
    favorites?: boolean
}

export const TableContacts = ({ id, favorites }: TableContactsProps) => {

    const [contacts, setContacts] = useState<ContactModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        getContacts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getContacts = async () => {
        setLoading(true);
        let contacts: ContactModel[] = [];
        if (favorites) {
            contacts = await getAllContactsFavorites(id);
        } else {
            contacts = await getAllContacts(id);
        }
        setContacts(contacts);
        setLoading(false);
    }

    const handleFavorite = async (contact: ContactModel) => {

        const estadoActual = contact.is_favorite;

        const newContacts = contacts.map((con) => {
            if (con.id === contact.id) {
                return {
                    ...con,
                    is_favorite: !estadoActual
                }
            } else {
                return con;
            }
        })

        setContacts(newContacts);

        const error = await updateContactFavorite(contact.id, !estadoActual);
        if (error === null) {
            if (favorites) {
                getContacts();
            }
            return;
        }

        const newContactsRegreso = contacts.map((con) => {
            if (con.id === contact.id) {
                return {
                    ...con,
                    is_favorite: estadoActual
                }
            } else {
                return con;
            }
        })

        setContacts(newContactsRegreso);



    }



    return (
        <div>
            <Table>
                <TableCaption> {id} </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Borrar</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Apellido</TableHead>
                        <TableHead>Teléfono</TableHead>
                        <TableHead>Correo</TableHead>
                        <TableHead className="text-right">Favorito</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        contacts.map((contact, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">
                                    <DeleteContactDialog
                                        id={contact.id}
                                        name={contact.name}
                                        getContacts={getContacts} />
                                </TableCell>
                                <TableCell>{contact.name}</TableCell>
                                <TableCell>{contact.last_name}</TableCell>
                                <TableCell>{contact.phone}</TableCell>
                                <TableCell>{contact.email}</TableCell>
                                <TableCell className="text-right flex items-center justify-end">
                                    <Star onClick={() => {
                                        handleFavorite(contact)
                                    }} className={`${contact.is_favorite ? "text-yellow-500" : "text-gray-400"}  cursor-pointer`} />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            {
                loading && (
                    <div className="w-full">
                        <Skeleton className="w-full h-5" />
                        <Skeleton className="w-full h-5 mt-2" />
                        <Skeleton className="w-full h-5 mt-2" />
                    </div>
                )
            }
            {
                !favorites && (
                    <CreateContactDialog getContacts={getContacts} />
                )
            }

        </div>
    )
}
