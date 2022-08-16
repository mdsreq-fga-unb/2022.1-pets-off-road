import React, {createContext, useState, useEffect} from 'react';

interface Iuser {
    id: number;
}

type AuthContextType = {
    user: Iuser[];
    signed: boolean;
    // saveTodo: (todo: ITodo) => void;
    // updateTodo: (id: number) => void;
};

type Props = {
    children?: React.ReactNode
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider:  React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<Iuser | null>(null);
    const [typeUser, setTypeUser] = useState<string | null>('');
    const [signed, setSigned] = useState<boolean | false>(false);

    async function signIn(email: string, password: string) {
        try {
        
        } catch (error) {
        console.error('Error:', error);
        }
    }

    async function updateUser(values: string, id: string) {

        // const fetchResponse1 = await fetch(`${Host}/api/user/${id}`, settings);

        try {

        } catch (error) {
        console.error('Error:', error);
        }

    }


    async function signOut() {
        
    }

    return (
        <AuthContext.Provider
        value={{
            signed,
            user,
            typeUser,
            signIn,
            updateUser,
            signOut,
        }}>
        {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;