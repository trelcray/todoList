import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import {
  TextInputIconProps,
  TextInputInputProps,
  TextInputRootProps,
} from '../@types/textInput';

TextInputRoot.displayName = 'TextInput.Root';

function TextInputRoot({ className, children }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        'flex items-center rounded bg-gray-600 focus-within:ring-2 ring-cyan-300',
        className,
      )}
    >
      {children}
    </div>
  );
}

function TextInputIcon({ children, className, asChild }: TextInputIconProps) {
  const Comp = asChild ? Slot : 'span';
  return (
    <Comp className={clsx('flex items-center ml-1 text-gray-400', className)}>
      {children}
    </Comp>
  );
}

TextInputIcon.displayName = 'TextInput.Icon';

function TextInputInput({ className, ...props }: TextInputInputProps) {
  return (
    <input
      className={clsx(
        'bg-transparent pl-2 w-full text-gray-100 text-md outline-none placeholder:text-gray-400',
        className,
      )}
      {...props}
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
