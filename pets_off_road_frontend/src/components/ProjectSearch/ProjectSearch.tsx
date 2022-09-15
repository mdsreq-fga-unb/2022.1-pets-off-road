import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../ProjectList/ProjectList.module.css'
export function ProjectSearch(){

    const [component, setComponent] = useState<string>();

    const userCpf = localStorage.getItem('cpf');
    let[posts, setPosts] = useState([]);

    async function buscarProjeto(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const nome: any = {nome: e.currentTarget.buscarProjeto.value}
        console.log(nome)
        await axios.post(`http://159.223.189.251:3030/project/find/name`, nome)
                .then(data=>{setPosts(data.data)})
                .catch(err=>{console.log('Deu ruim')})
        setComponent('search')
    }

    return (
        <main>
            <form onSubmit={buscarProjeto}> 
                <input name='buscarProjeto' required type="text" placeholder="Buscar Projetos"/>
                <button> Buscar </button>
            </form>
            <div className={styles.publishContainer}>
                        {
                            component === 'search' && 
                            <>
                                <h1>Projetos Disponíveis: </h1>
                                
                                <div className={styles.div}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Nome Projeto</th>
                                                <th>Cidade</th>
                                                <th>Estado</th>
                                                <th>Numero Membros</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                posts.map((project: any) => {
                                                    return(
                                                        <tr key={project.id}>
                                                            <td className={styles.capitalize}>{project.id}</td>
                                                            <td
                                                                className={styles.capitalize}>
                                                                <Link to={`/project/${project.id}`}>{project.nome}</Link>
                                                            </td>
                                                            <td className={styles.capitalize}>{project.cidade}</td>
                                                            <td className={styles.capitalize}>{project.uf}</td>
                                                            <td className={styles.capitalize}>{project.numero_membros}</td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </>
                        }
                    </div>

            </main>
      )
}