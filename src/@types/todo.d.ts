export interface ITodo {
  id: string;
  task: string;
  completed: boolean;
}

export interface ITodoSliceState {
  tasks: ITodo[]
}