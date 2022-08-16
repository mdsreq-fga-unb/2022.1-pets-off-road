//Hooks e funcionalidades
import { useContext, useState } from 'react';
import {Link} from 'react-router-dom'

//Estilos
import styles from './Cadastro.module.css'

//Imagens e Icones
import Logo from '../assets/logo.svg'
import {ArrowCircleLeft, HouseLine, Users} from 'phosphor-react'
import { AuthContext } from '../context/AuthContext';
import * as service from '../services/Auth'
import axios from 'axios';

export function Cadastro(){
    const {
        cadastro
    } = useContext(AuthContext);
    const [profileType, setProfileType] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const url = "http://localhost:3030/user"
        const values = {
            cpf: data.get('cpf'),
            nome: data.get('nome'),
            email: data.get('email'),
            telefone: data.get('tel'),
            senha: data.get('senha'),
            uf: data.get('uf'),
            cidade: data.get('cidade'),
            endereco: data.get('endereco')
        }
        return await axios.post(url, values)
    }

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

                    <button className={styles.profileVolunteer} onClick={() => setProfileType('voluntario')}><Users size={28}/> Voluntário</button>
                </div>
                
                ||
                
                profileType === "projeto" && <form className={styles.formCadastro}>
                
                <ArrowCircleLeft onClick={() => setProfileType(null)}/>

                    <label>Nome do Projeto</label>
                    <input type="text" placeholder="Ex: Nome-do-Projeto"/>

                    <label>Endereço de email</label>
                    <input type="email" placeholder="@mail.com.br"/>

                    <label>UF</label>
                    <input type="text" placeholder="Ex: DF"/>

                    <label>Cidade</label>
                    <input type="text" placeholder="Ex: Brasília"/>

                    <label>CPF/CNPJ</label>
                    <input type="text" placeholder="XXX.XXX.XXX-XX"/>

                    <label>Telefone</label>
                    <input type="tel" placeholder="(DDD) XXXXX-XXXX"/>

                    <label>Senha</label>
                    <input type="password" placeholder="Mínimo 8 caracteres" />

                    <button type="submit">Cadastrar</button>
                </form>  
                
                || 
                
                profileType === "voluntario" && <form onSubmit={handleSubmit} className={styles.formCadastro}>
                
                <ArrowCircleLeft onClick={() => setProfileType(null)}/>

                <label>Nome</label>
                <input name='nome' type="text" placeholder="Ex: João Da Silva"/>

                <label>Endereço de email</label>
                <input name='email' type="email" placeholder="@mail.com.br"/>

                <label>UF</label>
                <input name='uf' type="text" placeholder="Ex: DF" />

                <label>Cidade</label>
                <input name='cidade' type="text" placeholder="Ex: Brasília" />

                <label>Endereço</label>
                <input name='endereco' type="text" placeholder="Ex: Quadra 2" />

                <label>CPF</label>
                <input name='cpf' type="text" placeholder="XXX.XXX.XXX-XX" />

                <label>Telefone</label>
                <input name='tel' type="tel" placeholder="(DDD) XXXXX-XXXX" />

                <label>Senha</label>
                <input name='senha' type="password" placeholder="Mínimo 8 caracteres"/>

                <button type="submit">Cadastrar</button>
            </form>
            }
            </div>
        </div>
    )
}