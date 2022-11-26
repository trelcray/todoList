import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import clsx from 'clsx';
import { Dispatch } from 'react';

export interface IAlertProps extends AlertDialogPrimitive.AlertDialogProps {
  open: boolean;
  onOpenChange: Dispatch<React.SetStateAction<boolean>>;
  handleDelete: any;
}

export function Alert({ open, onOpenChange, handleDelete }: IAlertProps) {
  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay
          forceMount
          className="fixed inset-0 z-20 bg-black/50"
        />
        <AlertDialogPrimitive.Content
          forceMount
          className={clsx(
            'fixed z-50',
            'w-[95vw] max-w-md rounded-lg p-4 md:w-full',
            'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
            'bg-white dark:bg-gray-800',
            'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
          )}
        >
          <AlertDialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Are you absolutely sure?
          </AlertDialogPrimitive.Title>
          <AlertDialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
            This action cannot be undone. This will permanently delete your task from list.
          </AlertDialogPrimitive.Description>
          <div className="mt-4 flex justify-end space-x-2">
            <AlertDialogPrimitive.Cancel
              className={clsx(
                'inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium',
                'bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-100 hover:dark:bg-gray-600',
                'border border-gray-300 dark:border-transparent',
                'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
              )}
            >
              Cancel
            </AlertDialogPrimitive.Cancel>
            <AlertDialogPrimitive.Action
              onClick={handleDelete}
              className={clsx(
                'inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium',
                'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600',
                'border border-transparent',
                'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
              )}
            >
              Confirm
            </AlertDialogPrimitive.Action>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
