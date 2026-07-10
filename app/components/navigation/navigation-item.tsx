import { Link } from "react-router";
import { Typography } from "../typography";

interface NavigationItemProps {
  label: string;
  to: string;
  onSelect?: () => void;
}

export function NavigationItem({ label, to, onSelect }: NavigationItemProps) {
  return (
    <li>
      <Link to={to} onClick={onSelect}>
        <Typography style="header">{label}</Typography>
      </Link>
    </li>
  );
}
