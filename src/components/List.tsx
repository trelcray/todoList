import { Button } from './Button';
import { PencilSimpleLine, TrashSimple } from 'phosphor-react';

interface Props {
  children: string;
}

export function List({children}: Props) {
  return (
    <ul className="flex items-center w-full justify-between text-gray-100 bg-gray-600 rounded-md p-4">
      <li>{children}</li>
      <div className='flex'>
        <Button.Root className="rounded-full py-1 px-1 cursor-pointer bg-transparent hover:bg-gray-500">
          <Button.Icon>
            <PencilSimpleLine className="hover:text-blue-400" />
          </Button.Icon>
        </Button.Root>
        <Button.Root className="rounded-full py-1 px-1 cursor-pointer bg-transparent hover:bg-gray-500">
          <Button.Icon>
            <TrashSimple className="hover:text-red-400" />
          </Button.Icon>
        </Button.Root>
        {/*  <button onClick={() => editItem(i)} type="submit">
                  Editar
                </button> */}
                {/* <button onClick={() => deleteItem(i)} type="submit">
                  Remover
                </button> */}
      </div>
    </ul>
  );
}
