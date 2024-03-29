import styles from './PetsEdit.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Props{
    matricula:string;
}

export function PetsEdit({matricula}:Props){
    let[posts, setPosts]: any = useState([]);
    
    useEffect(()=>{
        axios.get(`http://159.223.189.251:3030/animal/${localStorage.getItem('currentAnimalId')}`)
            .then(data=>{setPosts(data.data)})
            .catch(err=>{console.log('Deu ruim')})
    }, [{matricula}])

    const handleSubmitAnimal = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        const id = window.location.pathname.split('/')[2];
        const cpf_dono = data.get('cpf_tutor') === ''? null: data.get('cpf_tutor');
        const raca = data.get('raca') === ''? null: data.get('raca');
        const cirurgias = data.get('cirurgia') === ''? null: data.get('cirurgia');

        const atualizarAnimal = {
            cpf_dono: cpf_dono,
            project_id: id,
            nome: data.get('nome_pet'),
            especie: data.get('especie'),
            raca: raca,
            idade: data.get('idade'),
            cirurgias: cirurgias,
            castrado: e.currentTarget.castrado.value,
            condicao_saude: e.currentTarget.saude.value
        }
        
        try {
            await axios.patch(`http://159.223.189.251:3030/animal/${localStorage.getItem('currentAnimalId')}`, atualizarAnimal)
            alert('Dados atualizados');

        } catch (error) {
            alert('dados invalidos')
        }
      };

    return(
        <main>
            <h1>Atualizar Animal: {posts.nome}</h1>
            <br />
            <form onSubmit={handleSubmitAnimal} className={styles.formCadastro}>
            <label>CPF do Tutor (Opcional)</label>
            <input defaultValue={posts.cpf_dono} type="text" name="cpf_tutor" placeholder="XXXXXXXXXXX"/>

            <label>Nome do Cachorro</label>
            <input defaultValue={posts.nome} type="text" name="nome_pet" placeholder="Ex: Floquinho"/>

            <label>Idade</label>
            <input defaultValue={posts.idade} type="number" name="idade" placeholder="Ex: 2"/>

            <label>Espécie</label>
            <input defaultValue={posts.especie} type="text" name='especie' placeholder="Ex: Cachorro"/>

            <label>Raca (Opcional)</label>
            <input defaultValue={posts.raca} type="text" name='raca' placeholder="Ex: Bulldog"/>
    
            <label>Cirurgias (Opcional)</label>
            <input defaultValue={posts.cirurgias} type="text" name="cirurgia" placeholder="Descrever as cirurgias nas quais o animal foi submetido além da castração" />

            <div>
                <label>É Castrado?</label>
                <div>
                    <label>Sim</label>
                    <input defaultChecked type='radio' name='castrado' id='true' value={1}/>

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
                    <input defaultChecked type='radio' name='saude' value={1}/>
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

            <button type="submit">Atualizar</button>
            </form>  
        </main>
    )
}