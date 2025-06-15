'use client';

import { Avatar, Box, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import classNames from "classnames"

const NavBar = () => {


    const { status, data: session } = useSession();

    const currentPath = usePathname();
    console.log("currentPath : ", currentPath);

    const links = [
        { label: "Home", href: "/" },
        { label: "Food Options", href: "/api/menu/displayoptions" },
        { label: "My Cart", href: "/cart" },
        // { label: "Login", href: "/api/auth/signin" }

    ];

    return (

        <nav className='border-b   px-4 mt-1 h-15  py-4' >

            {/* style={{ background: "#76e68944" }} */}

            <Container>

                <Flex justify="between">
                    <Flex align="center" gap="2">
                        <ul className="flex  space-x-8">
                            {
                                links.map(l =>

                                    <li key={l.href} >
                                        <Link
                                            className={
                                                classNames({
                                                    'text-zinc-900': l.href === currentPath,
                                                    'text-zinc-500': l.href !== currentPath,
                                                    'hover:text-zinc-950 transition-colors': true
                                                })
                                            }
                                            href={l.href}
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </Flex>
                    <Box>
                        {
                            // <Link href="/api/auth/singout"> Logout</Link>
                            status === "authenticated" && (


                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Avatar src={session.user!.image!} fallback="!"
                                            size="2"
                                            radius='full'
                                            className='cursor-pointer'
                                        />

                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content>

                                        <DropdownMenu.Label>
                                            <Text size="2"> {session.user?.email}</Text>
                                        </DropdownMenu.Label>

                                        <DropdownMenu.Item>
                                            <Link href="/api/auth/signout"> Logout</Link>
                                        </DropdownMenu.Item>

                                    </DropdownMenu.Content>

                                </DropdownMenu.Root>
                            )
                        }
                        {
                            status === "unauthenticated" && <Link href="/api/auth/signin"> Login</Link>
                        }
                    </Box>
                </Flex>

            </Container>
        </nav>
    )
}

export default NavBar