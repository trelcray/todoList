import * as ToastPrimitive from "@radix-ui/react-toast";
import clsx from "clsx";
import { ReactNode } from "react";

export interface IToastProviderProps extends ToastPrimitive.ToastProps {
  children?: ReactNode;
}

ToastProvider.displayName = "Toast.Provider";

export function ToastProvider({ children, ...props }: IToastProviderProps) {
  return (
    <ToastPrimitive.Provider swipeDirection="right" {...props}>
      {children}
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
}

export interface IToastRootProps extends ToastPrimitive.ToastProps {
  className?: string;
  children: ReactNode;
}

ToastRoot.displayName = "Toast.Root";

export function ToastRoot({ children, className, ...props }: IToastRootProps) {
  return (
    <ToastPrimitive.Root
      className={clsx(
        "flex flex-col absolute top-5 right-5 items-center w-full max-w-xs text-gray-500 bg-gray-50 rounded-lg divide-gray-200 shadow",
        className
      )}
      {...props}
    >
      {children}
    </ToastPrimitive.Root>
  );
}

export interface IToastTitleProps {
  className?: string;
  children: ReactNode;
}

ToastTitle.displayName = "Toast.Title";

export function ToastTitle({ children, className }: IToastTitleProps) {
  return (
    <ToastPrimitive.Title
      className={clsx("w-full max-w-xs text-gray-600", className)}
    >
      {children}
    </ToastPrimitive.Title>
  );
}

export interface IToastActionProps {
  className?: string;
  children: ReactNode;
}

ToastAction.displayName = "Toast.Action";

export function ToastAction({ children, className }: IToastActionProps) {
  return (
    <ToastPrimitive.Action
      className={clsx("cursor-pointer", className)}
      asChild
      altText="Button to closed toast"
    >
      {children}
    </ToastPrimitive.Action>
  );
}

export interface IToastDescriptionProps {
  className?: string;
  children: ReactNode;
}

ToastDescription.displayName = "Toast.Description";

export function ToastDescription({
  children,
  className,
}: IToastDescriptionProps) {
  return (
    <ToastPrimitive.Description
      className={clsx("mb-3 mt-1", className)}
      asChild
    >
      {children}
    </ToastPrimitive.Description>
  );
}

export const Toast = {
  Provider: ToastProvider,
  Root: ToastRoot,
  Title: ToastTitle,
  Action: ToastAction,
  Description: ToastDescription,
};
