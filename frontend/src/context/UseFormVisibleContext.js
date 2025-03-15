import { createContext, useContext } from "react";

const formVisibilityContext = createContext({
	isFormVisible: false,
	toggleInputForm: () => {},
});

export const FormVisibilityContextProvider = formVisibilityContext.Provider;
export const UseFormVisibilityContext = () => useContext(formVisibilityContext);
