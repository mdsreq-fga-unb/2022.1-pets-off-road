import axios from 'axios';
import { host } from '../Contants'

export const getUser = async () => {
    const url = host + 'user'
    try{
        const settings = { 
            method: 'GET',   
            headers: new Headers({       'Content-Type': 'application/json'     })
        }
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json()
        return data
    } catch(error) {
        return error;
    }
}

export const signIn = async ({email,password}) => {
    const url = host + 'login';
    try{
        const settings = { 
            method: 'POST',         
            headers: new Headers({       'Content-Type': 'application/json'     }),
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json()
        return data
    } catch(error) {
        return error;
    }
}

export const signUp = async (value) => {
    const url = host + 'user'
    try{
        const settings = { 
            method: 'POST',
            mode: 'no-cors',         
            headers: new Headers({       'Content-Type': 'application/json'     }),
            body: {
                cpf: value.cpf,
                nome: value.nome,
                email: value.email,
                telefone: value.telefone,
                senha: value.senha,
                uf: value.uf,
                cidade: value.cidade,
                endereco: value.endereco
            },
        }
        console.log(body)
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json()
        return data
    } catch(error) {
        return error;
    }
}