'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import type React from "react" // Added import for React

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname()

    return (
        <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
            <Link href="/dashboard">
                <Button
                    variant="ghost"
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === "/dashboard" ? "text-primary" : "text-muted-foreground",
                    )}
                >
                    Dashboard
                </Button>
            </Link>
            <Link href="/dashboard/contacts">
                <Button
                    variant="ghost"
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === "/dashboard/contacts" ? "text-primary underline" : "text-muted-foreground",
                    )}
                >
                    Contactos
                </Button>
            </Link>
            <Link href="/dashboard/favorites">
                <Button
                    variant="ghost"
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === "/dashboard/favorites" ? "text-primary underline" : "text-muted-foreground",
                    )}
                >
                    Favoritos
                </Button>
            </Link>

        </nav>
    )
}

