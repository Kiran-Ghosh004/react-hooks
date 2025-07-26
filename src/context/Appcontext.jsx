import { createContext } from "react";

// Create the context
export const Appcontext = createContext();

const ContextProvider = (props) => {
    const phone = "1234567890";
    const name="kiran";

    return (
        <Appcontext.Provider value={{phone,name}}>
            {props.children}  {/* Corrected typo */}
        </Appcontext.Provider>
    );
}

export default ContextProvider;

 