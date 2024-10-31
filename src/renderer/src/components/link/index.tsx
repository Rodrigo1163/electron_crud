import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";

interface LinkProps {
    to: string
    children: React.ReactNode
}

export function LinkContent({ children, to }: LinkProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => {
                return clsx(
                    'flex items-center text-sm gap-2 py-2 px-3 rounded group',
                    {
                        "bg-gray-50 font-semibold": isActive,
                        "text-black": isActive,
                        "text-gray-300": !isActive
                    }
                )
            }}

        >
            <span className="truncate flex-1">
                {children}
            </span>
        </NavLink>
    )
}