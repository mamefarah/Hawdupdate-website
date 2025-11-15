import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const NavLink = ({ to, label, onClick }: NavLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className={cn(
      "px-4 py-2 text-sm font-medium rounded-md transition-colors",
      "hover:bg-secondary hover:text-secondary-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    )}
  >
    {label}
  </Link>
);

export default NavLink;