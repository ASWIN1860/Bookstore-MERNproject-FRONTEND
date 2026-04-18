import React, { useState } from 'react'
import { createContext } from 'react'

export const searchContext = createContext()

function ContextApi({ children }) {

    const [globalSearchKey, setGlobalSearchKey] = useState("")

    return (
        <>
            <searchContext.Provider value={{globalSearchKey,setGlobalSearchKey}}>
                {children}
            </searchContext.Provider>
        </>

    )
}

export default ContextApi