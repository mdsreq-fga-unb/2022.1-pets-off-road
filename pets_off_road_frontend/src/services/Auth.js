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
            headers: new Headers({       'Content-Type': 'application/json'     }),
            body: JSON.stringify({
                cpf: value.cpf,
                nome: value.name,
                email: value.email,
                telefone: value.phone,
                senha: value.password,
                uf: value.uf,
                cidade: value.city,
                endereco: value.address
            }),
        }
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json()
        return data
    } catch(error) {
        return error;
    }
}