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
                <img src={Logo} alt="Logo da Petshub" />
                <p>Lorem ipsum dolor sit oris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className={styles.registrationBox}>
                <div className={styles.welcomeMessage}> 
                    <h1>Bem-vindo à PetsHub</h1>
                    <p>Cadastra-se na nossa plataforma</p>
                </div>

                {profileType === null && 

                <div className={styles.chooseProfile} onClick={() => setProfileType('projeto')}>
                    <button className={styles.profileProject}><HouseLine size={28}/> Sou Projeto</button>

                    <button className={styles.profileVolunteer} onClick={() => setProfileType('volunteer')}><Users size={28}/> Voluntário</button>
                </div>
                
                ||
                
                profileType === "projeto" && <form className={styles.formCadastro}>
                
                <ArrowCircleLeft onClick={() => setProfileType(null)}/>

                    <label>Nome</label>
                    <input type="text" placeholder="Ex: João Da Silva"/>

                    <label>Endereço de email</label>
                    <input type="email" placeholder="@mail.com.br"/>

                    <label>CPF</label>
                    <input type="text" placeholder="XXX.XXX.XXX-XX"/>

                    <label>Telefone</label>
                    <input type="tel" placeholder="(DDD) XXXXX-XXXX"/>

                    <label>Senha</label>
                    <input type="password" placeholder="Mínimo 8 caracteres" />

                    <button type="submit">Cadastrar</button>
                </form>  
                
                || 
                
                profileType === 'volountario' && <form className={styles.formCadastro}>
                
                <ArrowCircleLeft onClick={() => setProfileType(null)}/>

                <label>Nome</label>
                <input type="text" placeholder="Ex: João Da Silva"/>

                <label>Endereço de email</label>
                <input type="email" placeholder="@mail.com.br"/>

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