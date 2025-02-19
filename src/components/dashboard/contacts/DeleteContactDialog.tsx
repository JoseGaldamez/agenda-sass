import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2 } from 'lucide-react'
import { deleteContactById } from '@/server/database/contacts'

interface DeleteContactDialogProps {
    id: number,
    name: string,
    getContacts: () => Promise<void>
}

export const DeleteContactDialog = ({ id, name, getContacts }: DeleteContactDialogProps) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Trash2 className="text-red-600 hover:text-red-700 cursor-pointer" />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Seguro que quieres eliminar este contacto? ( {name} )</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={async () => {
                        await deleteContactById(id);
                        await getContacts();
                    }} >Si quiero eliminar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
