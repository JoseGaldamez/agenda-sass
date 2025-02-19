import { TableContacts } from "@/components/dashboard/contacts/TableContacts";
import { MainNav } from "@/components/dashboard/MainNav";
import { SearchNav } from "@/components/dashboard/SearchNav";
import { UserNav } from "@/components/dashboard/UserNav";
import { getCurrentUser } from "@/server/auth/login/actions";

export default async function ContactsPage() {

    // obtener mi usuario
    const user = await getCurrentUser();
    const displayName = user?.user_metadata.display_name as string ?? "Usuario";


    return (
        <div className="hidden flex-col md:flex">
            <div className="border-b">
                <div className="flex max-w-7xl mx-auto h-16 items-center px-4">
                    <MainNav className="mx-6" />
                    <div className="ml-auto flex items-center space-x-4">
                        <SearchNav />
                        <UserNav name={displayName} email={user?.email ?? "user@example.com"} />
                    </div>
                </div>
            </div>
            <main className="w-full space-y-4 p-8 pt-6 max-w-7xl mx-auto">
                <h2>Contactos</h2>
                <hr />
                <TableContacts id={user?.id as string} />
            </main>
        </div>
    );
}