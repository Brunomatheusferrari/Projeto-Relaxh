import React, { createContext, useContext, useState } from 'react' ;

//Context

const MenuContext = createContext({});

//Provider

const MenuProvider = ({ children }) => {
    const [menuState, setState] = useState({ visible: false });

    const openMenu = (payload) => setState({ ...payload, visible: true});
    const closeMenu = () => setState({visible: false});

    return(
        <MenuContext.Provider value={{ menuState, openMenu, closeMenu }}>
            {children}
        </MenuContext.Provider>
    );
}

//Hook

const useMenuContext = () => {
    const context = useContext(MenuContext);
    return context;
}

export { useMenuContext, MenuProvider };