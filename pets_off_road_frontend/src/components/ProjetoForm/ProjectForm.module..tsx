import { Link } from 'react-router-dom'
import { ArrowCircleLeft } from 'phosphor-react'
import styles from './ProjectForm.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export function ProjectForm(){

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
            await axios.post('http://localhost:3030/project', cadastroProjeto)
            return navigate('/profile')
        } catch (error) {
            alert('dados invalidos')
        }

      };

    return(
        <main>
            <h1>Criar Novo Projeto</h1>
            <br />
            <form onSubmit={handleSubmitProject} className={styles.formCadastro}>
                <label>Nome do Projeto</label>
                <input name='nome_projeto' required type="text" placeholder="Ex: Nome-do-Projeto"/>

                <label>Endereço de email</label>
                <input name='email_projeto' required type="email" placeholder="@mail.com.br"/>

                <label>UF</label>
                <input name='uf_projeto' required type="text" placeholder="Ex: DF"/>

                <label>Cidade</label>
                <input name='cidade_projeto' required type="text" placeholder="Ex: Brasília"/>

                <label>Endereco</label>
                <input name='endereco' required type="text" placeholder="Ex: Rua x, quadra x, numero x"/>

                <label>Telefone</label>
                <input name='telefone_projeto' required type="tel" placeholder="(DDD)XXXXX-XXXX"/>

                <button type="submit">Cadastrar</button>
            </form>  
        </main>
    )
}