import React, { createContext, useState } from 'react'

const MyContext = createContext();

export default function Provider({children}) {
    const [isActiveMenu, setIsActiveMenu] = useState(false)
    const [isOpened, setIsOpened] = useState(false)

    const changeStatusMenu = (newStatus) => {
        setIsActiveMenu(newStatus => !newStatus)
    }

    const changeStatusDropdown = (newState) => {
        setIsOpened(newState)
    }
    
    function setFalseStatus(newStatus) {
        setIsActiveMenu(newStatus)
    }

    return (
        <MyContext.Provider value={{isActiveMenu, changeStatusMenu, setFalseStatus, changeStatusDropdown, isOpened}}>
            {children}
        </MyContext.Provider>
    )
}
export { MyContext };
