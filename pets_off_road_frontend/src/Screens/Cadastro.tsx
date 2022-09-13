//Hooks e funcionalidades
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

//Estilos
import styles from './Cadastro.module.css'

//Imagens e Icones
import Logo from '../assets/logo.svg'
import {ArrowCircleLeft, HouseLine, Users} from 'phosphor-react'
import axios from 'axios';

export function Cadastro(){
    const [profileType, setProfileType] = useState<string | null>(null);

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);

        const cadastro = {
            cpf: data.get('cpf'),
            nome: data.get('nome'),
            email: data.get('email'),
            telefone: data.get('telefone'),
            senha: data.get('senha'),
            uf: data.get('uf'),
            cidade: data.get('cidade'),
            endereco: data.get('endereco')
        }
        
        try {
            await axios.post('http://localhost:3030/user', cadastro)
            alert('Cadastro Concluido com Sucesso')
            navigate('/')
        } catch (error) {
            alert('Não Foi possível concluir o cadastro, dados inválidos');
        }

      };

      const handleSubmitProject = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);

        const cadastroProjeto = {
            cpf: data.get('cpf_projeto'),
            nome: data.get('nome_projeto'),
            email: data.get('email_projeto'),
            telefone: data.get('telefone_projeto'),
            senha: data.get('senha_projeto'),
            uf: data.get('uf_projeto'),
            cidade: data.get('cidade_projeto'),
        }
        
        await axios.post('http://localhost:3030/project', cadastroProjeto)
            .then(() => {return navigate('/') })
            .catch(err=>{alert('dados invalidos')})
      };


    return(
        <div className={styles.screen}>
            <div className={styles.welcomeBox}>
                <Link to="/"><ArrowCircleLeft/></Link>
                <img className={styles.logo} src={Logo} alt="Logo da Petshub" />
            </div>

            <div className={styles.registrationBox}>
                <div className={styles.welcomeMessage}> 
                    <h1>Bem-vindo à PetsHub</h1>
                    <p>Cadastra-se na nossa plataforma</p>
                </div>

                {profileType === null && 

                <div className={styles.chooseProfile} >
                    <button className={styles.profileProject} onClick={() => setProfileType('projeto')}><HouseLine size={28}/> Sou Projeto</button>

                    <button className={styles.profileVolunteer} onClick={() => setProfileType('voluntario')}>
                        <div>
                            <Users size={28}/> Voluntário 
                        </div>
                        <span>Caso não possua cadastro na plataforma</span>
                    </button>
                </div>
                
                ||
                
                profileType === "projeto" && <form onSubmit={handleSubmitProject} className={styles.formCadastro}>
                
                <ArrowCircleLeft onClick={() => setProfileType(null)}/>

                    <label>Nome do Projeto</label>
                    <input name='nome_projeto' required type="text" placeholder="Ex: Nome-do-Projeto"/>

                    <label>Endereço de email</label>
                    <input name='email_projeto' required type="email" placeholder="@mail.com.br"/>

                    <label>UF</label>
                    <input name='uf_projeto' required type="text" placeholder="Ex: DF"/>

                    <label>Cidade</label>
                    <input name='cidade_projeto' required type="text" placeholder="Ex: Brasília"/>

                    <label>CPF/CNPJ</label>
                    <input name='cpf_projeto' required type="text" placeholder="Somente-Digitos"/>

                    <label>Telefone</label>
                    <input name='telefone_projeto' required type="tel" placeholder="(DDD)XXXXX-XXXX"/>

                    <label>Senha</label>
                    <input name='senha_projeto' required type="password" placeholder="Mínimo 8 caracteres" />

                    <button type="submit">Cadastrar</button>
                </form>  
                
                || 
                
                profileType === "voluntario" && <form onSubmit={handleSubmit} className={styles.formCadastro}>
                
                <ArrowCircleLeft onClick={() => setProfileType(null)}/>

                <label>Nome</label>
                <input name='nome' required type="text" placeholder="Ex: João Da Silva"/>

                <label>Endereço de email</label>
                <input name='email' required type="email" placeholder="@mail.com.br"/>

                <label>UF</label>
                <input name='uf' required type="text" placeholder="Ex: DF"/>

                <label>Cidade</label>
                <input name='cidade' required type="text" placeholder="Ex: Brasília"/>

                <label>Endereço</label>
                <input name='endereco' required type="text" placeholder="Ex: Quadra 2"/>

                <label>CPF</label>
                <input name='cpf' required type="text" placeholder="XXX.XXX.XXX-XX"/>

                <label>Telefone</label>
                <input name='telefone' required type="tel" placeholder="(DDD) XXXXX-XXXX"/>

                <label>Senha</label>
                <input name='senha' required type="password" placeholder="Mínimo 8 caracteres" />

                <button type="submit">Cadastrar</button>
            </form>
            }
            </div>
        </div>
    )
}