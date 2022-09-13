import { Link } from 'react-router-dom'
import styles from './ProjectEdit.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Props{
    id:string;
}

export function ProjectEdit({id}:Props){
    let[posts, setPosts]: any = useState([]);
    
    useEffect(()=>{
        axios.get(`http://localhost:3030/project/${localStorage.getItem('currentProjectId')}`)
            .then(data=>{setPosts(data.data)})
            .catch(err=>{console.log('Deu ruim')})
    }, [{id}])

    const navigate = useNavigate();
    const handleSubmitProject = async (e: React.FormEvent<HTMLFormElement>) => {
        const data = new FormData(e.currentTarget);

        const cadastroProjeto = {
            cpf: localStorage.getItem('cpf'),
            nome: data.get('nome_projeto'),
            email: data.get('email_projeto'),
            telefone: data.get('telefone_projeto'),
            uf: data.get('uf_projeto'),
            cidade: data.get('cidade_projeto'),
            endereco: data.get('endereco')
        }
        
        try {
            await axios.patch(`http://localhost:3030/project/${localStorage.getItem('currentProjectId')}`, cadastroProjeto)
            return
        } catch (error) {
            alert('dados invalidos')
        }
        
      };

    return(
        <main>
            <h1>Atualizar Projeto: {posts.nome}</h1>
            <br />
            <form onSubmit={handleSubmitProject} className={styles.formCadastro}>
                <label>Nome do Projeto</label>
                <input name='nome_projeto' required type="text" placeholder="Ex: Nome-do-Projeto" defaultValue={posts.nome}/>

                <label>Endereço de email</label>
                <input name='email_projeto' required type="email" placeholder="@mail.com.br" defaultValue={posts.email}/>

                <label>UF</label>
                <input name='uf_projeto' required type="text" placeholder="Ex: DF" defaultValue={posts.uf}/>

                <label>Cidade</label>
                <input name='cidade_projeto' required type="text" placeholder="Ex: Brasília" defaultValue={posts.cidade}/>

                <label>Endereco</label>
                <input name='endereco' required type="text" placeholder="Ex: Rua x, quadra x, numero x" defaultValue={posts.endereco}/>

                <label>Telefone</label>
                <input name='telefone_projeto' required type="tel" placeholder="(DDD)XXXXX-XXXX" defaultValue={posts.telefone}/>

                <button type="submit">Atualizar</button>
            </form>  
        </main>
    )
}