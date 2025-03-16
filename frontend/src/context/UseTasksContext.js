import { createContext, useContext } from "react";

const tasksContext = createContext({
	tasks: [],
	createTask: () => {},
	updateTask: () => {},
	deleteTask: () => {},
});

export const TasksContextProvider = tasksContext.Provider;

export const UseTaskContext = () => useContext(tasksContext);
