import { IListProps } from "../@types/list";

export function List({ children }: IListProps) {
  return (
    <ul className="flex w-full text-gray-100 bg-gray-600 rounded-md py-3 px-2">
      <li className="flex flex-1 items-center justify-between">{children}</li>
    </ul>
  );
}
