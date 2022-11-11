import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

ButtonRoot.displayName = "Button.Root";

function ButtonRoot({ children, className }: IButtonRootProps)  {
  return (
    <div
      className={clsx(
        "flex justify-center items-center bg-cyan-500 rounded font-semibold text-black text-sm transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
        className
      )}
    >
      {children}
    </div>
  );
}

export interface IButtonIconProps {
  children: ReactNode;
}

ButtonIcon.displayName = "Button.Icon";

function ButtonIcon({ children }: IButtonIconProps) {
  return <Slot className="w-6 h-6 text-gray-100">{children}</Slot>;
}

export interface IButtonButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

ButtonButton.displayName = "Button.Button";

function ButtonButton({
  children,
  asChild,
  className,
  ...props
}: IButtonButtonProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <button className={clsx("bg-transparent outlined", className)} {...props}>
      <Comp className={clsx("text-md text-white gap-1 py-3 px-2", className)}>{children}</Comp>
    </button>
  );
}

export const Button = {
  Root: ButtonRoot,
  Button: ButtonButton,
  Icon: ButtonIcon,
};
