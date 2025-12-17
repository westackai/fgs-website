"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  to: string;
  className?:
    | string
    | ((props: { isActive: boolean; isPending: boolean }) => string);
  activeClassName?: string;
  pendingClassName?: string;
  end?: boolean; // Exact match
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    { className, activeClassName, pendingClassName, to, end, ...props },
    ref
  ) => {
    const pathname = usePathname();
    const isActive = end ? pathname === to : pathname.startsWith(to); // Simple check, can be refined

    // If to is "/" and not end, it would match everything. Usually "/" should be exact.
    // Let's force exact for root if not specified.
    const effectiveIsActive =
      to === "/" || end ? pathname === to : pathname.startsWith(to);

    let resolvedClassName = "";
    if (typeof className === "function") {
      resolvedClassName = className({
        isActive: effectiveIsActive,
        isPending: false,
      });
    } else {
      resolvedClassName = className || "";
    }

    return (
      <Link
        ref={ref}
        href={to}
        className={cn(resolvedClassName, effectiveIsActive && activeClassName)}
        {...props}
      >
        {props.children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
