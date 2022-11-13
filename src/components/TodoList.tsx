import { TextInput } from './TextInput';
import {
  ClipboardText,
  MagnifyingGlass,
  PencilSimple,
  Trash,
} from 'phosphor-react';
import { List } from './List';
import { useState } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { Button } from './Button';
import { deleteTask, updateTaks } from '../redux/todo.slice';
import { useDispatch } from 'react-redux';
import { setEditId, setInputData, setIsShow } from '../redux/state.slice';
import { Checkbox } from './Checkbox';

export function TodoList() {
  const [search, setSearch] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const { tasks } = useAppSelector((state) => state.tasks);

  const countCompleted = tasks.filter((value) => value.completed);
  const dispatch = useDispatch();

  const filteredItems =
    search.length > 0 ? tasks.filter((data) => data.task.includes(search)) : [];

  const handleEdit = (id: string, task: string) => {
    dispatch(setInputData(task));
    dispatch(setEditId(id));
    dispatch(setIsShow());
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const HandleComplet = (id: string, task: string, completed: boolean) => {
    setIsCompleted(!isCompleted);
    dispatch(updateTaks({ id, task: task, completed: !completed }));
  };

  return (
    <div className="flex mt-20 flex-col justify-center px-10 md:px-0 items-center w-full">
      <div className="flex flex-col justify-start w-full md:w-1/2 gap-4">
        <TextInput.Root className="md:w-3/6">
          <TextInput.Icon>
            <MagnifyingGlass className="h-4 w-4" />
          </TextInput.Icon>
          <TextInput.Input
            placeholder="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            className="py-2"
          ></TextInput.Input>
        </TextInput.Root>
        <section className="flex justify-between text-xs font-semibold">
          <p className="flex items-center gap-2 text-cyan-400">
            Created Tasks
            <span className="rounded-full bg-gray-600 text-xs text-gray-100 px-[0.5rem] py-[0.1rem]">
              {`${tasks.length}`}
            </span>
          </p>
          <p className="flex items-center gap-2 text-purple-700">
            Completed
            <span className="rounded-full bg-gray-600 text-xs text-gray-100 px-[0.5rem] py-[0.1rem]">
              {`${countCompleted.length} of ${tasks.length}`}
            </span>
          </p>
        </section>
      </div>
      {tasks.length < 1 && (
        <div className="flex flex-col justify-center items-center mt-10">
          <ClipboardText className="w-12 h-12 dark:text-gray-500 font-bold" />
          <section className="dark:text-gray-400 text-center mt-5">
            <p className="font-semibold">
              You don't have any tasks registered yet.
            </p>
            <p className="text-sm">
              Create tasks and organize your to-do items.
            </p>
          </section>
        </div>
      )}
      {search.length > 0 ? (
        <div className="flex flex-col justify-center items-center w-1/2 gap-1 mt-8">
          {filteredItems.map((data, i) => {
            return (
              <List key={i}>
                <div className="flex gap-2">
                  <Checkbox
                    checked={data.completed}
                    onCheckedChange={() =>
                      HandleComplet(data.id, data.task, data.completed)
                    }
                  />
                  {data.task}
                </div>
                <div className="flex items-center">
                  <Button.Root className="rounded-full w-full h-full cursor-pointer bg-transparent hover:bg-gray-500">
                    <Button.Icon className="rounded-full p-1">
                      <PencilSimple
                        onClick={() => handleEdit(data.id, data.task)}
                        className="hover:text-blue-400 w-8 h-8"
                      />
                    </Button.Icon>
                  </Button.Root>
                  <Button.Root className="flex rounded-full w-full h-full cursor-pointer bg-transparent hover:bg-gray-500">
                    <Button.Icon className="rounded-full p-1">
                      <Trash
                        onClick={() => handleDelete(data.id)}
                        className="hover:text-red-400 w-8 h-8"
                      />
                    </Button.Icon>
                  </Button.Root>
                </div>
              </List>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-1/2 gap-1 mt-8">
          {tasks.map((data) => {
            return (
              <List key={data.id}>
                <div className="flex gap-2">
                  <Checkbox
                    checked={data.completed}
                    onCheckedChange={() =>
                      HandleComplet(data.id, data.task, data.completed)
                    }
                  />
                  {data.task}
                </div>
                <div className="flex items-center">
                  <Button.Root className="rounded-full w-full h-full cursor-pointer bg-transparent hover:bg-gray-500">
                    <Button.Icon className="rounded-full p-1">
                      <PencilSimple
                        onClick={() => handleEdit(data.id, data.task)}
                        className="hover:text-blue-400 w-8 h-8"
                      />
                    </Button.Icon>
                  </Button.Root>
                  <Button.Root className="flex rounded-full w-full h-full cursor-pointer bg-transparent hover:bg-gray-500">
                    <Button.Icon className="rounded-full p-1">
                      <Trash
                        onClick={() => handleDelete(data.id)}
                        className="hover:text-red-400 w-8 h-8"
                      />
                    </Button.Icon>
                  </Button.Root>
                </div>
              </List>
            );
          })}
        </div>
      )}
    </div>
  );
}
