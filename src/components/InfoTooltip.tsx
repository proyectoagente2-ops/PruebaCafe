import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface InfoTooltipProps {
  children: React.ReactNode;
  tooltip: string;
  side?: "top" | "right" | "bottom" | "left";
}

export function InfoTooltip({ children, tooltip, side = "top" }: InfoTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent 
          side={side}
          className="bg-[#2A1810]/90 text-[#F5EDE4] text-xs px-3 py-1.5 rounded-md"
        >
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}