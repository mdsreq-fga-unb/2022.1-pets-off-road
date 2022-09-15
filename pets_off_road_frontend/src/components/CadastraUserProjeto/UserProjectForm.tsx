import { Link } from 'react-router-dom'
import { ArrowCircleLeft } from 'phosphor-react'
import styles from './UserProjectForm.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export function UserProjectForm(){

    const handleSubmitProject = async (e: React.FormEvent<HTMLFormElement>) => {
        const id = window.location.pathname.split('/')[2];
        const form: any = document.getElementById('userformCadastro');
        e.preventDefault()
        const data = new FormData(e.currentTarget);

        const cadastroProjeto = {
            cpf_user: e.currentTarget.cpf_do_voluntario.value,
            id_project: id
        }
        
        try {
            await axios.post('http://159.223.189.251:3030/project/user', cadastroProjeto)
            alert('Projeto cadastrado com sucesso!')
            form.reset()
        } catch (error) {
            alert('dados invalidos')
        }
      };

    return(
        <main>
            <h1>Cadastrar Voluntário Neste Projeto</h1>
            <br />
            <form id='userformCadastro' onSubmit={handleSubmitProject} className={styles.formCadastro}>
                <label>CPF do Voluntário</label>
                <input name='cpf_do_voluntario' required type="text" placeholder="Somente números"/>
                <button type="submit">Cadastrar</button>
            </form>  
        </main>
    )
}