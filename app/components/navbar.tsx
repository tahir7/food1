'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const NavBar = () => {


    const {status, data: session } = useSession();

    const currentPath = usePathname();
    // console.log("currentPath : ", currentPath);

    const links = [
        { label: "Dashboard", href: "/" },
        { label: "Food menu", href: "/api/menu/displaymenu/" },
        { label: "My Cart", href: "/cart" },
        { label: "Login", href: "/api/auth/signin" }

    ];

    return (
        <nav >
            {/* <Link href="" className='m-2  text-zinc-500 hover:text-zinc-800'>Home</Link>
        <Link href="" className='m-2 mr-11  text-zinc-500 hover:text-zinc-800'>My Cart</Link> */}
            <ul className="flex bg-slate-300  mb-5 mt-1 px-10 h-15 items-center space-x-10">
                {
                    

                    links.map(l =>

                    <li key={l.href} >
                        <Link  href={l.href}
                            className={`${l.href === currentPath ? ' text-zinc-900' : ' text-zinc-500'}  hover:text-zinc-950`}>
                            {l.label}
                        </Link>


                    </li>           

                    )
                    
                }

            </ul>

        </nav>
    )
}

export default NavBar