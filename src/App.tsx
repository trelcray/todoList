import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

export function App() {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-gray-700">
      <Header />
      <TodoList />
    </div>
  );
}
