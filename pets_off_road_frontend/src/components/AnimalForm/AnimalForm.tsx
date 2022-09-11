import { Link } from 'react-router-dom'
import { ArrowCircleLeft } from 'phosphor-react'
import styles from './AnimalForm.module.css'
// import Logo from '../assets/logo.svg'

export function AnimalForm(){

    return(
        
        <form className={styles.formCadastro}>

            <label>CPF do Tutor</label>
            <input type="text" name="cpf-tutor" placeholder="XXX.XXX.XXX-XX"/>

            <label>Nome do Cachorro</label>
            <input type="text" name="nome-cachorro" placeholder="Ex: Floquinho"/>

            <label>Idade</label>
            <input type="number" name="idade" placeholder="Ex: 2"/>

            <label>Espécie</label>
            <input type="text" name='especie' placeholder="Ex: Cachorro"/>

            <label>Condição de Saúde</label>
            <input type="text" name='saude' placeholder="Ex: Saudável"/>

    
            <label>Cirurgia</label>
            <input type="text" name="cirurgia" placeholder="Mínimo 8 caracteres" />


            <div>
                <label>É Castrado?</label>
                <div>
                    <label>Sim</label>
                    <input type="checkbox" name='castrado' />
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

            <button type="submit">Cadastrar</button>
        </form>  
    )
}