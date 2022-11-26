import * as ProgressPrimitive from "@radix-ui/react-progress";
import clsx from "clsx";

export interface IProgressProps extends ProgressPrimitive.ProgressProps {
  className?: string;
}

export const Progress = ({ className, ...props }: IProgressProps) => {
  return (
    <ProgressPrimitive.Root className="h-1 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-900" {...props}>
      <ProgressPrimitive.Indicator
        className={clsx("h-full bg-green-500 origin-left animate-progress", className)}
      />
    </ProgressPrimitive.Root>
  );
};
