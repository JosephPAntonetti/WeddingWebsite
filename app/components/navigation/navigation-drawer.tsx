import { Typography } from "../typography";
import { NavigationItem } from "./navigation-item";

interface NavigationDrawerProps {
  onClose: () => void;
}

const links = [
  { label: "Home", to: "/home" },
  { label: "Coming Soon", to: "/" },
];

export function NavigationDrawer({ onClose }: NavigationDrawerProps) {
  return (
    <div className="flex flex-col gap-md p-md">
      <Typography style="header">Menu</Typography>
      <ul className="flex flex-col gap-md">
        {links.map((link) => (
          <NavigationItem
            key={link.to}
            label={link.label}
            to={link.to}
            onSelect={onClose}
          />
        ))}
      </ul>
    </div>
  );
}
