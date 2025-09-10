import { cva } from "class-variance-authority";
import { clsx } from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
  {
    variants: {
      color: {
        primary: "bg-bgColor-2 text-secondary shadow-lg hover:shadow-xl",

        secondary:
          "bg-secondary text-primary border-2 border-textColor-card hover:border-bgColor-2 shadow-sm hover:shadow-md",

        outline:
          "border-2 border-bgColor text-primary hover:bg-bgColor-2 hover:text-secondary",

        sidebarItem:
          "bg-bgColor-1 text-primary hover:bg-bgColor-2 hover:text-secondary",

        ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",

        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl",

        success:
          "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-md",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
      },
      width: {
        auto: "w-auto",
        full: "w-full",
        fit: "w-fit",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
      width: "auto",
    },
  }
);

const Button = ({
  children,
  className = "",
  color,
  size,
  width,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={clsx(buttonVariants({ color, size, width }), className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
