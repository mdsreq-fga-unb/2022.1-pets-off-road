import { Link } from 'react-router-dom'
import { ArrowCircleLeft } from 'phosphor-react'
import styles from './AnimalForm.module.css'
import Logo from '../assets/logo.svg'

import {Header} from '../components/Header'

export function AnimalForm(){


    return(
        

     <div className={styles.screen}>
         <div className={styles.welcomeBox}>
         <Link to='/profile'><ArrowCircleLeft className={styles.arrow} /></Link>
            <img className={styles.logo} src={Logo} alt="Logo da Petshub" />
         </div> 
         <div className={styles.registrationBox}>
            <div className={styles.welcomeMessage}> 
                    <h1>Bem-vindo, Tutor</h1>
                    <p>Cadastra-se seu pet na nossa plataforma</p>
             </div> 
            <div className={styles.screenForm}>
                <form className={styles.formCadastro}>

                <div>
                    <label>CPF do Tutor</label>
                    <input type="text" name="cpf-tutor" placeholder="XXX.XXX.XXX-XX"/>
                </div>

                <div>
                    <label>Nome do Cachorro</label>
                    <input type="text" name="nome-cachorro" placeholder="Ex: Floquinho"/>
                </div>

                <div>
                    <label>Idade</label>
                    <input type="number" name="idade" placeholder="Ex: 2"/>
                </div>

                <div>
                    <label>Espécie</label>
                    <input type="text" name='especie' placeholder="Ex: Cachorro"/>
                </div>

                
                <div>
                    <label>Condição de Saúde</label>
                    <input type="text" name='saude' placeholder="Ex: Saudável"/>
                </div>

                <div>
                    <label>É Castrado?</label>
                    <div>
                        <label>Sim</label>
                        <input type="checkbox" name='castrado' placeholder="XXX.XXX.XXX-XX" />
                    </div>
                </div>

                <div>
                    <label>Vacinas:</label>
                    <div>
                        <label>V8/V10</label>
                        <input type="checkbox" name='v8-v10'/>

                        <label>Raiva</label>
                        <input type="checkbox" name='raiva'/>

                        <label>Gripe</label>
                        <input type="checkbox" name='gripe'/>

                        <label>Giárdia</label>
                        <input type="checkbox" name='giardia'/>
                    </div>
                </div>

                <div>
                    <label>Cirurgia</label>
                    <input type="text" name="cirurgia" placeholder="Mínimo 8 caracteres" />
                </div>

                <button type="submit">Cadastrar</button>
                </form>  
                </div>
            </div>
        </div>
    )
}