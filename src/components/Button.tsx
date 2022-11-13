import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { IButtonButtonProps, IButtonIconProps, IButtonRootProps } from '../@types/button';



ButtonRoot.displayName = 'Button.Root';

function ButtonRoot({ children, className }: IButtonRootProps) {
  return (
    <div
      className={clsx(
        'flex justify-center items-center bg-gray-600 rounded font-semibold text-black text-sm transition-colors hover:bg-gray-700 focus:ring-2 ring-white',
        className,
      )}
    >
      {children}
    </div>
  );
}



ButtonIcon.displayName = 'Button.Icon';

function ButtonIcon({ children, className }: IButtonIconProps) {
  return (
    <Slot className={clsx('w-6 h-6 text-gray-100', className)}>{children}</Slot>
  );
}



ButtonButton.displayName = 'Button.Button';

function ButtonButton({
  children,
  asChild,
  className,
  ...props
}: IButtonButtonProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <button className={clsx('bg-transparent outlined', className)} {...props}>
      <Comp className={clsx('text-md text-white gap-1 py-3 px-2', className)}>
        {children}
      </Comp>
    </button>
  );
}

export const Button = {
  Root: ButtonRoot,
  Button: ButtonButton,
  Icon: ButtonIcon,
};
