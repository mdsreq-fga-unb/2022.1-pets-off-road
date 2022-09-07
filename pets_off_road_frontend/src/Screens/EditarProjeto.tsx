//Hooks e funcionalidades
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { Header } from '../components/Header';

//Estilos
import styles from './EditarProjeto.module.css'

import {ArrowCircleLeft, HouseLine, Users} from 'phosphor-react'



export function EditarProjeto(){
    const [profileType, setProfileType] = useState<string | null>(null);

    return(
        <>
            <Header />

                <div className={styles.welcomeBox}>
                    
                        <Link to='/profile'><ArrowCircleLeft className={styles.arrow} /></Link>
                    
    
                </div> 
           
                <form className={styles.formCadastro}>
                

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
                    <input type="telefone" placeholder="(DDD) XXXXX-XXXX"/>

                    <label>Senha</label>
                    <input type="password" placeholder="Mínimo 8 caracteres" />

                    <button type="submit">Salvar</button>
                </form>  
                
            
    
     </>
    )
}