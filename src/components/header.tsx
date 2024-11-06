'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GiBrain } from "react-icons/gi";

export default function Header() {
    const path = usePathname();

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`w-full h-20 flex justify-between items-center px-10 fixed ${scrollY > 0 && 'header-shdw'}`}
            style={{backgroundColor: "var(--background)", transition: "0.2s"}}
        >
            <div className="flex gap-2 items-center">
                <GiBrain size={40} color="var(--purple)" />
                <div>
                    <h1>
                        <span className="monospace">Info</span><span className="cursive">Mind</span>
                    </h1>
                </div>
            </div>
            <div className="flex gap-4">
                <Link href="/home" className={`header-btn ${path === '/home' && 'selected'}`}>
                    <h2>Início</h2>
                </Link>
                <Link href="/form" className={`header-btn ${path === '/form' && 'selected'}`}>
                    <h2>Questionário</h2>
                </Link>
                <Link href="/reports" className={`header-btn ${path === '/reports' && 'selected'}`}>
                    <h2>Relatórios</h2>
                </Link>
            </div>
        </div>
    )
}