import { CheckCircle, WarningCircle, XCircle } from 'phosphor-react';
import { Children, Dispatch } from 'react';
import { Button } from './Button';
import { Progress } from './Progress';
import { Toast } from './Toast';

interface Props {
  open: boolean;
  onOpenChange: Dispatch<React.SetStateAction<boolean>>;
  children: string;
}

export function ToastSuccess({ open, onOpenChange, children }: Props) {
  return (
    <Toast.Provider>
      <Toast.Provider>
        <Toast.Root open={open} className="p-2" onOpenChange={onOpenChange}>
          <div className="flex w-full pt-2 pb-4 justify-between">
            <Toast.Title className="font-bold">
              <div className="flex justify-start w-full gap-2 items-center">
                <Button.Icon className="flex justify-center items-center bg-green-100 rounded-xl">
                  <CheckCircle className="text-green-500" />
                </Button.Icon>
                <p>{children}</p>
              </div>
            </Toast.Title>
            <Toast.Action>
              <div>
                <Button.Icon>
                  <XCircle className="text-gray-600" />
                </Button.Icon>
              </div>
            </Toast.Action>
          </div>
          <Progress />
        </Toast.Root>
      </Toast.Provider>
    </Toast.Provider>
  );
}

export function ToastError({ open, onOpenChange, children }: Props) {
  return (
    <Toast.Provider>
      <Toast.Provider>
        <Toast.Root open={open} className="p-2" onOpenChange={onOpenChange}>
          <div className="flex w-full pt-2 pb-4 justify-between">
            <Toast.Title className="font-bold">
              <div className="flex justify-start w-full gap-2 items-center">
                <Button.Icon className="flex justify-center items-center bg-red-200 rounded-xl">
                  <WarningCircle className="text-red-500" />
                </Button.Icon>
                <p>{children}</p>
              </div>
            </Toast.Title>
            <Toast.Action>
              <div>
                <Button.Icon>
                  <XCircle className="text-gray-600" />
                </Button.Icon>
              </div>
            </Toast.Action>
          </div>
          <Progress className='bg-red-500'/>
        </Toast.Root>
      </Toast.Provider>
    </Toast.Provider>
  );
}
