import { Link } from 'react-router-dom'
import styles from './PetsEdit.module.css'
import { useNavigate } from 'react-router-dom'
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

    const navigate = useNavigate();
    const handleSubmitAnimal = async (e: React.FormEvent<HTMLFormElement>) => {
        const data = new FormData(e.currentTarget);

        const cadastroProjeto = {
            cpf: localStorage.getItem('cpf'),
            nome: data.get('nome_projeto'),
            email: data.get('email_projeto'),
            telefone: data.get('telefone_projeto'),
            uf: data.get('uf_projeto'),
            cidade: data.get('cidade_projeto'),
            endereco: data.get('endereco')
        }
        
        try {
            await axios.patch(`http://159.223.189.251:3030/project/${localStorage.getItem('currentProjectId')}`, cadastroProjeto)
            return
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
        </main>
    )
}