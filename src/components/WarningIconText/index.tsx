import { TriangleAlertIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface WarningIconTextProps {
  text: string;
  iconSize: string | number;
}

export const WaringIconText = ({ text, iconSize }: WarningIconTextProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <TriangleAlertIcon color="red" size={iconSize} />
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
