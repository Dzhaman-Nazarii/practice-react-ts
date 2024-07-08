import { FC } from "react";
import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
	removeTodo: (id: number) => void;
	toggleTodo: (id: number) => void;
}

export const TodoItem: FC<ITodoItem> = ({
	id,
	title,
	complete,
	removeTodo,
	toggleTodo,
}) => {
	return (
		<div style={{margin: '0 10px'}}>
			<input
				type="checkbox"
				checked={complete}
				onChange={() => toggleTodo(id)}
			/>
			{title}
			<button
				onClick={() => removeTodo(id)}
				style={{
					background: "transparent",
					border: "none",
					outline: "none",
					color: "red",
				}}>
				x
			</button>
		</div>
	);
};