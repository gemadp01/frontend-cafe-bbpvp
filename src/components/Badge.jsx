import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { Coffee } from "lucide-react";

const badgeVariants = cva(
  "inline-flex items-center gap-2 backdrop-blur-sm border",
  {
    variants: {
      color: {
        primary: "bg-bgColor-2/90 border-bgColor-2/30 text-secondary",
        secondary: "bg-secondary border-secondary text-primary",
        muted: "bg-gray-200/80 text-gray-600 border-gray-400/30 ",
      },
      size: {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-2.5 text-base",
      },
      rounded: {
        md: "rounded-lg",
        full: "rounded-full",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
      rounded: "full",
    },
  }
);

const iconSizes = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

const Badge = ({
  className = "",
  color,
  size = "md",
  rounded,
  icon: Icon = Coffee,
  text = "Find Your Perfect Cafe",
}) => {
  return (
    <div className={clsx(badgeVariants({ color, size, rounded }), className)}>
      {Icon && <Icon className={clsx(iconSizes[size])} />}
      <span className="font-medium">{text}</span>
    </div>
  );
};

export default Badge;
