import { Link, useNavigate } from 'react-router-dom'
import { ArrowCircleLeft } from 'phosphor-react'
import styles from './AnimalForm.module.css'
import axios from 'axios';

export function AnimalForm(){

    const navigate = useNavigate();
    const id = window.location.pathname.split('/')[2];

    const handleSubmitAnimal = async (e: React.FormEvent<HTMLFormElement>) => {
        const data = new FormData(e.currentTarget);
        const vaccines = {
            raiva: e.currentTarget.raiva.checked,
            V8: e.currentTarget.V8.checked,
            V10: e.currentTarget.V10.checked,
        }

        const cpf_dono = data.get('cpf_tutor') === ''? null: data.get('cpf_tutor');
        const raca = data.get('raca') === ''? null: data.get('raca');
        const cirurgias = data.get('cirurgia') === ''? null: data.get('cirurgia');

        const cadastroAnimal = {
            animal: {            
                cpf_dono: cpf_dono,
                project_id: id,
                nome: data.get('nome_pet'),
                especie: data.get('especie'),
                raca: raca,
                idade: data.get('idade'),
                cirurgias: cirurgias,
                castrado: e.currentTarget.castrado.value,
                condicao_saude: e.currentTarget.saude.value
            },
            vaccines
        }
        try {
            await axios.post('http://159.223.189.251:3030/animal', cadastroAnimal)
            return
        } catch (error) {
            alert('dados invalidos')
        }
      };

    return(
        <form onSubmit={handleSubmitAnimal} className={styles.formCadastro}>

            <label>CPF do Tutor (Opcional)</label>
            <input type="text" name="cpf_tutor" placeholder="XXXXXXXXXXX"/>

            <label>Nome do Cachorro</label>
            <input type="text" name="nome_pet" placeholder="Ex: Floquinho"/>

            <label>Idade</label>
            <input type="number" name="idade" placeholder="Ex: 2"/>

            <label>Espécie</label>
            <input type="text" name='especie' placeholder="Ex: Cachorro"/>

            <label>Raca (Opcional)</label>
            <input type="text" name='raca' placeholder="Ex: Bulldog"/>
    
            <label>Cirurgias (Opcional)</label>
            <input type="text" name="cirurgia" placeholder="Descrever as cirurgias nas quais o animal foi submetido além da castração" />

            <div>
                <label>É Castrado?</label>
                <div>
                    <label>Sim</label>
                    <input type='radio' name='castrado' id='true' value={1}/>

                    <label>Não</label>
                    <input type='radio' name='castrado' id='false' value={0}/>
                </div>
            </div>


            
            <div>
                <label>Condição de Saúde</label>
                <div>
                    <label>Doente</label>
                    <input type='radio' name='saude' value={0}/>

                    <label>Saudavel</label>
                    <input type='radio' name='saude' value={1}/>
                </div>
            </div>
            
  


            <div>
                <label>Vacinas:</label>
                <div>
                    <label>Raiva</label>
                    <input type="checkbox" name='raiva'/>

                    <label>V8</label>
                    <input type="checkbox" name='V8'/>

                    <label>V10</label>
                    <input type="checkbox" name='V10'/>
                </div>
            </div>

            <button type="submit">Cadastrar</button>
        </form>  
    )
}