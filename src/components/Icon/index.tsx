import { icons } from "lucide-react";

type IconName = keyof typeof icons;

interface Props {
  name: IconName;
  color?: string;
  size?: number;
}

export const Icon = ({ name, color, size }: Props) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};
