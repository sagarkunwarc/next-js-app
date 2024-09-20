"use client";

import React from "react"
import Link from "next/link";
import { usePathname } from "next/navigation"
import "./style.css"

const AuthLayout = ({children} : {children:React.ReactNode}) => {
    const pathname = usePathname();
    console.log({pathname});
    return (
        <>
        <Link className = {pathname.startsWith("/login") ? "font-bold" : "" } href = "/login"> Login </Link>
        <Link className = {pathname.startsWith("/register") ? "font-bold" : "" } href ="/register"> Register </Link>
        <Link className = {pathname.startsWith("/forgot-password") ? "font-bold" : "" } href = "/forgot-password"> Forgot Password</Link>
        {children}
        </>
    )
}

export default AuthLayout;