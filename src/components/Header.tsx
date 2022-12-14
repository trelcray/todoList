import { Button } from './Button';
import { TextInput } from './TextInput';
import { NotePencil, PlusCircle } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { addTask, updateTaks } from '../redux/todo.slice';
import { setInputData, setIsShow } from '../redux/state.slice';
import { v4 as uuid } from 'uuid';
import { useAppSelector } from '../hooks/useAppSelector';
import { useState } from 'react';
import { ToastError, ToastSuccess } from './Toasts';

export function Header() {
  const dispatch = useDispatch();
  const [isCreated, setIsCreated] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [isError, setIsError] = useState(false);
  const { isShow, editId, inputData } = useAppSelector((state) => state.states);
  const { tasks } = useAppSelector((state) => state.tasks);

  const createItem = () => {
    if (!inputData) {
      return setIsError(true);
    }
    dispatch(addTask({ id: uuid(), task: inputData, completed: false }));
    dispatch(setInputData(''));
    setIsCreated(true);
  };

  const handleUpdate = () => {
    if (!inputData) {
      return setIsError(true);
    }
    const task = tasks.filter((state) => state.id === editId);
    const { completed } = task[0];
    dispatch(updateTaks({ id: editId, task: inputData, completed: completed }));
    dispatch(setIsShow());
    dispatch(setInputData(''));
    setIsEdited(true);
  };

  return (
    <div className="flex justify-center items-center bg-slate-500 dark:bg-neutral-900 h-44">
      <section className="flex text-cyan-400 text-4xl font-bold gap-2">
        <NotePencil className="text-purple-700" />
        <p>
          To
          <span className="text-purple-700">do</span>
        </p>
        <p>
          Li
          <span className="text-purple-700">st</span>
        </p>
      </section>
      <TextInput.Root className="absolute top-[9.2rem] left-[11vw] sm:left-[6vw] md:left-[25vw] w-1/2 sm:w-4/6 md:w-4/12 xl:w-5/12">
        <TextInput.Input
          value={inputData}
          placeholder="add your tasks"
          onChange={(e) => dispatch(setInputData(e.target.value))}
          className="py-4"
        />
      </TextInput.Root>
      {!isShow ? (
        <Button.Root className="cursor-pointer absolute top-[9.2rem] right-[11vw] sm:right-[6vw] md:right-[25vw] bg-cyan-400 hover:bg-cyan-500">
          <Button.Button
            onClick={createItem}
            className="flex items-center py-[0.52rem]"
          >
            <Button.Icon>
              <PlusCircle />
            </Button.Icon>{' '}
            Create
          </Button.Button>
        </Button.Root>
      ) : (
        <Button.Root className="cursor-pointer absolute top-[9.2rem] left-[68.2%] bg-cyan-400 hover:bg-cyan-500">
          <Button.Button
            onClick={handleUpdate}
            className="flex items-center py-[0.52rem] px-3"
          >
            <Button.Icon>
              <PlusCircle />
            </Button.Icon>
            Edit
          </Button.Button>
        </Button.Root>
      )}
      <ToastSuccess
        children="Successfully Created"
        open={isCreated}
        onOpenChange={setIsCreated}
      />
      <ToastSuccess
        children="Successfully Edited"
        open={isEdited}
        onOpenChange={setIsEdited}
      />
      <ToastError
        children="Error in creating the task"
        open={isError}
        onOpenChange={setIsError}
      />
      <ToastError
        children="Error in editing the task"
        open={isError}
        onOpenChange={setIsError}
      />
    </div>
  );
}
