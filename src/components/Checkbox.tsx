import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { Check } from 'phosphor-react'
import { CheckboxProps } from '../@types/checkbox'

export function Checkbox({className, ...props}: CheckboxProps) {

    return (
        <CheckboxPrimitive.Root className={clsx("w-6 h-6 p-[2px] bg-gray-300 rounded-full", className)} {...props}>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-400' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
     
    )
}