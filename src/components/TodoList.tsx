import { FC } from "react";
import { TodoItem } from "./TodoItem";
import { ITodo } from "../types/data";

interface ITodoListProps {
	items: ITodo[];
	removeTodo: (id: number) => void;
	toggleTodo: (id: number) => void;
}

export const TodoList: FC<ITodoListProps> = ({items, removeTodo, toggleTodo}) => {
	return (
		<>
			{items.map((todo) => (
				<TodoItem
					key={todo.id}
					removeTodo={removeTodo}
					toggleTodo={toggleTodo}
					{...todo}
				/>
			))}
		</>
	);
};
