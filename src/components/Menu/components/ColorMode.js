import { React, createContext, useState } from "react";

export const ColorModeContext = createContext({
    mode: "",
    setMode: () => {
        alert("É necessário configurar o mode!");
    },
    toggleMode: () => {
        alert("É necessário configurar o toggleMode!");
    }
});

export default function ColorModeProvider(props) {
    const [mode, setMode] = useState(props.initialMode);

    function toggleMode(state) {
        (mode === "light") ? (setMode("dark")) : (setMode("light"));
    };

    return (
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    );
}