import {
	ChangeEventHandler,
	FC,
	KeyboardEventHandler,
	useEffect,
	useRef,
	useState,
} from "react";
import { TodoList } from "./TodoList";
import { ITodo } from "../types/data";

export const App: FC = () => {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState<ITodo[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);

	const addTodo = () => {
		if (value) {
			setTodos([
				...todos,
				{
					id: Date.now(),
					title: value,
					complete: false,
				},
			]);
			setValue("");
		}
	};

	const removeTodo = (id: number): void => {
		setTodos(todos.filter(todo=> todo.id !== id))
	};

	const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) {
        return todo;
      } return {
        ...todo,
        complete: !todo.complete
      }
    }))
	};

	const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (evt) => {
		evt.preventDefault();
		setValue(evt.target.value);
	};

	const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (evt) => {
		if (evt.key === "Enter") {
			addTodo();
		}
	};

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<>
			<div>
				<input
					value={value}
					onChange={handleChangeInput}
					type="text"
					ref={inputRef}
					onKeyDown={handleKeyDown}
				/>
				<button onClick={addTodo}>Add</button>
			</div>
			<TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
		</>
	);
};
