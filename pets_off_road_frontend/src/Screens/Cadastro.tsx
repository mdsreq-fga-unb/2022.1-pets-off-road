//Hooks e funcionalidades
import { useState } from 'react';
import {Link} from 'react-router-dom'

//Estilos
import styles from './Cadastro.module.css'

//Imagens e Icones
import Logo from '../assets/logo.svg'
import {ArrowCircleLeft, HouseLine, Users} from 'phosphor-react'



export function Cadastro(){
    const [profileType, setProfileType] = useState<string | null>(null);

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
                
                profileType === "voluntario" && <form className={styles.formCadastro}>
                
                <ArrowCircleLeft onClick={() => setProfileType(null)}/>

                <label>Nome</label>
                <input type="text" placeholder="Ex: João Da Silva"/>

                <label>Endereço de email</label>
                <input type="email" placeholder="@mail.com.br"/>

                <label>UF</label>
                <input type="text" placeholder="Ex: DF"/>

                <label>Cidade</label>
                <input type="text" placeholder="Ex: Brasília"/>

                <label>Endereço</label>
                <input type="text" placeholder="Ex: Quadra 2"/>

                <label>CPF</label>
                <input type="text" placeholder="XXX.XXX.XXX-XX"/>

                <label>Telefone</label>
                <input type="tel" placeholder="(DDD) XXXXX-XXXX"/>

                <label>Senha</label>
                <input type="password" placeholder="Mínimo 8 caracteres" />

                <button type="submit">Cadastrar</button>
            </form>
            }
            </div>
        </div>
    )
}