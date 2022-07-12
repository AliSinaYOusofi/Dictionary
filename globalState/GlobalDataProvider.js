import {useReducer, useContext, createContext} from 'react';

const GlobalContext = createContext();

export const GlobalStateProvider = ( ({children, reducer, initialState}) => (
    <GlobalContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </GlobalContext.Provider>
));

export const useGlobalData = () => useContext(GlobalContext);