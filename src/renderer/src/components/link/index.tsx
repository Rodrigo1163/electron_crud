import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
    to: string
    children: React.ReactNode
}

export function LinkContent({ children, to }: LinkProps) {
    return (
        <Link to={to}>
            {children}
        </Link>
    )
}