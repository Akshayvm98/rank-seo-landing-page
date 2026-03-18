import { type LucideIcon } from "lucide-react";

type IconSize = "xs" | "sm" | "md" | "lg";

const sizeMap: Record<IconSize, string> = {
  xs: "h-3 w-3",
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

interface IconProps {
  icon: LucideIcon;
  size?: IconSize;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ icon: LucideIcon, size = "md", className = "", strokeWidth }: IconProps) {
  return (
    <LucideIcon
      className={`${sizeMap[size]} ${className}`}
      {...(strokeWidth !== undefined && { strokeWidth })}
    />
  );
}
