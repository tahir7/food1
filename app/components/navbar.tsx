'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const NavBar = () => {

    const currentPath = usePathname();
    console.log("currentPath : ", currentPath);

    const links = [
        { label: "Dashboard", href: "/" },
        { label: "My Cart", href: "/cart" }
    ];

    return (
        <nav >
            {/* <Link href="" className='m-2  text-zinc-500 hover:text-zinc-800'>Home</Link>
        <Link href="" className='m-2 mr-11  text-zinc-500 hover:text-zinc-800'>My Cart</Link> */}
            <ul className="flex bg-slate-300  mb-5 mt-1 px-10 h-15 items-center space-x-10">
                {

                    links.map(l =>

                        <Link key={l.href} href={l.href}
                            className={`${l.href === currentPath ?  ' text-zinc-900' : ' text-zinc-500'}  hover:text-zinc-950`}>
                            {l.label}
                        </Link>

                    )

                }
            </ul>
        </nav>
    )
}

export default NavBar