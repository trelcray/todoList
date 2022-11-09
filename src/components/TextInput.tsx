import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}

TextInputRoot.displayName = 'TextInput.Root';

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className={clsx("flex items-center h-12 gap-3 py-2 px-1 rounded bg-gray-800 w-1/3 focus-within:ring-2 ring-cyan-300")}>
      {props.children}
    </div>
  );
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-5 h-5 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-md outline-none placeholder:text-gray-400"
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
