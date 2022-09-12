import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectEdit } from '../ProjectEdit/ProjectEdit.module.';
import styles from './ProjectList.module.css'
export function ProjectList(){

    const [component, setComponent] = useState<string>();

    const userCpf = localStorage.getItem('cpf');
    let[posts, setPosts] = useState([]);
    

    useEffect(()=>{
        axios.get(`http://localhost:3030/project/search/${userCpf}`)
            .then(data=>{setPosts(data.data)})
            .catch(err=>{console.log('Deu ruim')})
    }, [])

    return (
        <main>
                <h1>Meus Projetos</h1>
    
                <div className={styles.div}>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome Projeto</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>Numero Membros</th>
                                <th>Opções</th>
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
                                            <td>
                                                <Link onClick={() => {localStorage.setItem('currentProjectId', (project.id)); setComponent("project-edit");}} to=''>
                                                    <span className={styles.activeButtonText}>Editar</span>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
    
                        </tbody>
                    </table>
                    <div className={styles.publishContainer}>
                        {
                            component === 'project-edit' && <ProjectEdit />
                        }
                    </div>
                </div>
            </main>
      )
}