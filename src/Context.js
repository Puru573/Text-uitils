import React, { createContext, useEffect, useState } from "react";
const Context = createContext(null);

const MyContextProvider = ({ children }) => {
    let heading = "Try TextUtils - word couter,character counter,remove extra spaces";
    let textSummary = "Your text summary";
    let preview = "preview"
    const [theme, setTheme] = useState(false);
    const [alert,setAlert]=useState(null);

    const showAlert=(message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        
        setTimeout(()=>{
            setAlert(null)
        },2000)
    }
    const toggleMode = () => {
        if (theme) {
            setTheme(false)
            document.body.style.backgroundColor = '#042743';
            showAlert("Darrk mode has been enabled","success");
        }
        else {
            setTheme(true)
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled","success");
        }
    }
    useEffect(() => (
        toggleMode()
    ), [])
    return (
        <Context.Provider value={{ theme, setTheme, toggleMode, heading, textSummary, preview,alert,showAlert }}>
            {children}
        </Context.Provider>
    )
}


export { MyContextProvider, Context };