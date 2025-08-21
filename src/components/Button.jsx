import { cva } from "class-variance-authority";

const button = cva(
  "py-2 px-5 rounded hover:bg-bgColor-2 hover:text-secondary",
  {
    variants: {
      color: {
        primary: "bg-bgColor-2 text-secondary",
        secondary: "border border-primary text-primary",
        active: "bg-bgColor-2 text-secondary",
      },
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "sm",
    },
  }
);

function Button({ color, size, children }) {
  return <button className={button({ color, size })}>{children}</button>;
}

export default Button;
