import { createContext, ReactNode, useState } from 'react';

interface CreateProviderProps {
    children: ReactNode
}

interface CreateContextData {
    name: string
}

export const CreateContext = createContext({} as CreateContextData);

export default function CreateProvider({ children }: CreateProviderProps) {
    const [name, setName] = useState('Rodrigo Sena')
    return (
        <CreateContext.Provider
            value={{ name }}
        >
            {children}
        </CreateContext.Provider>
    )
}
