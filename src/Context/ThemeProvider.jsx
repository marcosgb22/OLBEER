
import React, {useState} from 'react';
import ThemeContext from './ThemeContext';


const ThemeProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState


    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMOde)
    }

    const mostrarMensaje = () => {
        alert("Hola desde el contexto")
    }

    return(
        <ThemeContext.Provider value={
           { 
            darkMode,
            setDarkMode,
            mostrarMensaje
           }
        }>
            {children}
        </ThemeContext.Provider>

    )

}

