import { useState } from 'react';
import { Button } from './Button';
import { TextInput } from './TextInput';
import { PlusCircle } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todo.slice';

interface Props {
  item: string;
}

export function Header() {
  const dispatch = useDispatch();

  /* const todoState = useSelector((state) => state.task);
  console.log(todoState); */

  const [inputData, setInputData] = useState('');
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState<Props[]>([]);

  const createItem = () => {
    dispatch(addTodo(inputData));
    setInputData('');
  };

  const handleUpdate = () => {
    const editIndex = 1;
    tasks.splice(editIndex, 1, { item: inputData });
    setTasks([...tasks]);
    setShow(false);
    setInputData('');
  };

  return (
    <div className="flex gap-2">
      <TextInput.Root>
        <TextInput.Input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </TextInput.Root>
      {!show ? (
        <Button.Root className="cursor-pointer z-20">
          <Button.Button onClick={createItem} className="flex items-center">
            <Button.Icon>
              <PlusCircle />
            </Button.Icon>{' '}
            Adicionar
          </Button.Button>
        </Button.Root>
      ) : (
        <Button.Root onClick={createItem}>
          <Button.Icon>
            <PlusCircle />
          </Button.Icon>
          <Button.Button onClick={handleUpdate}>Editar</Button.Button>
        </Button.Root>
      )}
    </div>
  );
}
