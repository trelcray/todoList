import { FormEvent, useState } from 'react';

interface Props {}

export function App({}: Props) {
  const [inputData, setInputData] = useState('');
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState<number>(0);
  const [items, setItems] = useState([{ item: 'Caneta' }]);

  const createItem = (e: FormEvent) => {
    e.preventDefault();
    setItems((state) => [...state, { item: inputData }]);
    setInputData('');
  };

  const filteredItems =
    search.length > 0 ? items.filter((data) => data.item.includes(search)) : [];

  const editItem = (i: any) => {
    const { item } = items[i];
    setInputData(item);
    setShow(true);
    setEditIndex(i);
  };

  const deleteItem = (i: number) => {
    items.splice(i, 1);
    setItems([...items]);
  };

  const handleUpdate = () => {
    items.splice(editIndex, 1, { item: inputData });
    setItems([...items]);
    setShow(false);
    setInputData('');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        {!show ? (
          <button onClick={createItem} type="submit">
            Criar
          </button>
        ) : (
          <button onClick={handleUpdate}>Editar</button>
        )}
      </div>
      <br />
      <input
        type="text"
        placeholder="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
      {search.length > 0 ? (
        <ul>
          {filteredItems.map((data, i) => {
            return (
              <div key={i} style={{ display: 'flex' }}>
                <li>{data.item}</li>
                <button onClick={() => editItem(i)} type="submit">
                  Editar
                </button>
                <button onClick={() => deleteItem(i)} type="submit">
                  Remover
                </button>
              </div>
            );
          })}
        </ul>
      ) : (
        <ul>
          {items.map((data, i) => {
            return (
              <div key={i} style={{ display: 'flex' }}>
                <li>{data.item}</li>
                <button onClick={() => editItem(i)} type="submit">
                  Editar
                </button>
                <button onClick={() => deleteItem(i)} type="submit">
                  Remover
                </button>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}
