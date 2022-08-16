import React, {createContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import * as service from '../services/Auth'
// interface Iuser {
//     id: number;
// }

// type AuthContextType = {
//     user: Iuser[];
//     signed: boolean;
//     // saveTodo: (todo: ITodo) => void;
//     // updateTodo: (id: number) => void;
// };

// type Props = {
//     children?: React.ReactNode
// };

export const AuthContext = createContext({});

const AuthProvider  = ({ children }) => {
    const [user, setUser] = useState(null);
    const [typeUser, setTypeUser] = useState('');

    async function login(email, password) {
        try {
            const response = await service.signIn(email,password)
            setUser(response);
        } catch (error) {
        console.error('Error:', error);
        }
    }

    async function cadastro(value) {
        try {
            const values = {
                cpf: value.cpf,
                name: value.nome,
                email: value.email,
                phone: value.telefone,
                password: value.senha,
                uf: value.uf,
                city: value.cidade,
                address: value.endereco
            }
            const response = await service.signUp(values)
            setUser(response);
            let navigate = useNavigate();
            navigate('/');
        } catch (error) {
        console.error('Error:', error);
        }
    }

    async function updateUser(values, id) {

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
                signed: !!user,
                user,
                typeUser,
                cadastro,
                login,
                updateUser,
                signOut,
        }}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;