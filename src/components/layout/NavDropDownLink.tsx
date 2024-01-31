import clsx from "clsx";
import Link from "next/link";
import type { ReactElement, ReactNode } from "react";

export interface NavDropDownLinkProps {
  href: string;
  target?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const NavDropDownLink = ({
  href,
  target,
  className,
  children,
  onClick,
}: NavDropDownLinkProps): ReactElement => (
  <li
    className={clsx(
      "color-gray-200 text-gray-800 hover:text-green-600 text-sm transition-colors dark:(text-gray-200 hover:text-green-400)",
      className,
    )}
  >
    <Link
      href={href}
      className="px-4 py-2 w-full block"
      role="button"
      target={target}
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
);

export default NavDropDownLink;
