import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const soccialLink = [
  {
    title: "Facebook",
    href: "https://www.facebook.com",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.github.com",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://www.slack.com",
    icon: <Slack className="w-5 h-5" />,
  },
];

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {soccialLink.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor text-sm font-semibold rounded-sm px-2",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
