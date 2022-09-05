import { createContext } from "react";

export const DepedencyContext = createContext({});
export function DepedencyProvider({children, services}){
    return(
        <DepedencyContext.Provider value={services}>
            {children}
        </DepedencyContext.Provider>
    )
}