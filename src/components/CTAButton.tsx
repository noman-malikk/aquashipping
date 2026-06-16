import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type CTAButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const variantClasses = {
  primary: "bg-ocean text-white shadow-glow hover:bg-blue-700",
  secondary: "bg-ember text-white shadow-card hover:bg-orange-600",
  ghost: "border border-slate-200 bg-white text-ink shadow-sm hover:border-ocean hover:text-ocean",
  light: "border border-white/30 bg-white/12 text-white backdrop-blur hover:bg-white/20",
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition focus-ring disabled:cursor-not-allowed disabled:opacity-60";

export function CTAButton({
  children,
  to,
  href,
  icon: Icon,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
  onClick,
}: CTAButtonProps) {
  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4 shrink-0" /> : null}
      <span>{children}</span>
    </>
  );
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <motion.span className="inline-flex" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link className={classes} to={to}>
          {content}
        </Link>
      </motion.span>
    );
  }

  if (href) {
    return (
      <motion.a
        className={classes}
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
