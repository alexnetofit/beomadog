import { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "whatsapp" | "outline";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-cocoa-900 hover:bg-gold-400 shadow-lg shadow-gold-600/30",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark shadow-lg shadow-whatsapp/30",
  outline:
    "bg-transparent text-cocoa-700 border-2 border-cocoa-700 hover:bg-cocoa-700 hover:text-white",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: Variant;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold font-heading transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
