import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PetsEdit } from '../PetsEdit/PetsEdit';
import styles from './PetsList.module.css'

export  function PetsList() {
    const [enableComponent, setEnableComponent] = useState<string>();
    const [component , setComponent] = useState<JSX.Element>()
    const id = window.location.pathname.split('/')[2];

    let[posts, setPosts]: any = useState([]);

    useEffect(()=>{
        axios.get(`http://159.223.189.251:3030/animal/project/${id}`)
            .then(data=>{setPosts(data.data)})
            .catch(err=>{console.log('Deu ruim')})
    }, [])
  
    return (
    <main>
            <h1>Pets Cadastrados</h1>

            <div className={styles.div}>
                <table>
                    <thead>
                        <tr>
                            <th>Matricula</th>
                            <th>Nome</th>
                            <th>Especie</th>
                            <th>Idade</th>
                            <th>Saude</th>
                            <th>Castrado</th>
                            <th>Para Adoção</th>
                            <th>Cadastrado Em</th>
                            <th>Opções</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((item: any) => {
                                return(
                                    <tr key={item.matricula}>
                                        <td className={styles.capitalize}>{item.matricula}</td>
                                        <td 
                                            className={styles.capitalize}>
                                            <Link to={`#`}>{item.nome}</Link>
                                        </td>
                                        <td className={styles.capitalize}>{item.especie}</td>
                                        <td className={styles.capitalize}>{item.idade}</td>
                                        <td className={styles.capitalize}>{item.condicao_saude == true? "Saudavel":"Doente"}</td>
                                        <td className={styles.capitalize}>{item.castrado == true? "Sim":"Não"}</td>
                                        <td className={styles.capitalize}>{item.cpf_dono != null? "Não":"Sim"}</td>
                                        <td className={styles.capitalize}>{item.criado_em}</td>
                                        <td>
                                        <Link onClick={() => {
                                                    localStorage.setItem('currentAnimalId', (item.matricula)); 
                                                    setEnableComponent("animal-edit");
                                                    setComponent(<PetsEdit 
                                                                    matricula={(item.matricula)}
                                                                />)
                                                    }} 
                                                    to=''
                                                >
                                                    <span className={styles.activeButtonText}>Editar |</span>
                                                </Link >
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className={styles.publishContainer}>
                        {
                            enableComponent === 'animal-edit' && component
                        }
                    </div>
        </main>
  )
}
