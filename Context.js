import React, { useState } from 'react';
const Context = React.createContext();



const ContextProvider = (children) => {


    return (
        <Context.Provider value={} >
            {children}
        </Context.Provider>
    )
}

export default {ContextProvider, Context}
