import { FormEvent, useState } from 'react';
import { TextInput } from './components/TextInput';
import { MagnifyingGlass } from 'phosphor-react';
import { Header } from './components/Header';
import { useAppSelector } from './hooks/useAppSelector';
import { List } from './components/List';

interface Props {
  item: string;
}

export function App() {
  const [inputData, setInputData] = useState('');
  const [search, setSearch] = useState('');
  const [editIndex, setEditIndex] = useState<number>(0);

  const { tasks } = useAppSelector((state) => state.todo);

  const filteredItems =
    search.length > 0
      ? tasks.filter((data) => data.tasks.includes(search))
      : [];

  /*  const editItem = (i: number) => {
    const { tasks } = tasks[i];
    console.log("nossa", tasks)
    setInputData(tasks);
    setEditIndex(i);
  }; */

  /*  const deleteItem = (i: number) => {
    items.splice(i, 1);
    setItems([...items]);
  }; */

  return (
    <div className="min-h-screen bg-gray-700">
      <Header />
      <br />
      <TextInput.Root>
        <TextInput.Icon>
          <MagnifyingGlass size={32} />
        </TextInput.Icon>
        <TextInput.Input
          placeholder="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </TextInput.Root>
      {tasks.length < 1 && <p>show de bola</p>}
      {search.length > 0 ? (
        <div>
          {filteredItems.map((data, i) => {
            return <List key={i}>{data.tasks}</List>;
          })}
        </div>
      ) : (
        <ul>
          {tasks.map((data, i) => {
            return <List key={i}>{data.tasks}</List>;
          })}
        </ul>
      )}
    </div>
  );
}
