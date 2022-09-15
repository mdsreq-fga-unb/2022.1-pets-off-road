import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProjectEdit } from '../ProjectEdit/ProjectEdit';
import styles from './ProjectList.module.css'
export function ProjectList(){
    const [enableComponent, setEnableComponent] = useState<string>();
    const [component , setComponent] = useState<JSX.Element>()
    const userCpf = localStorage.getItem('cpf');
    let[posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get(`http://159.223.189.251:3030/project/search/${userCpf}`)
            .then(data=>{setPosts(data.data)})
            .catch(err=>{console.log('Deu ruim')})
    }, [posts])

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
                                                <span>
                                                    <Link onClick={() => {
                                                        localStorage.setItem('currentProjectId', (project.id)); 
                                                        setEnableComponent("project-edit");
                                                        setComponent(<ProjectEdit 
                                                                        id={project.id}
                                                                    />)
                                                        }} 
                                                        to=''
                                                    >
                                                        <span className={styles.activeButtonText}>Editar |</span>
                                                    </Link >
                                                </span>
                                                
                                                <span>
                                                    <Link to='/profile' onClick={()=>{
                                                        confirm('Deseja apagar o projeto? todos os dados relativos a ele serão apagados')? 
                                                        axios.delete(`http://159.223.189.251:3030/project/${project.id}`)
                                                            .then(()=>{
                                                                alert('Projeto Apagado')
                                                                posts.filter((e: any)=> e.id != project.id)
                                                            })
                                                            .catch(()=>{alert('Não foi possível apagar o projeto')})
                                                            :
                                                            alert('Operação cancelada')
                                                    }}>

                                                        <span className={styles.activeButtonText}>| Apagar</span>
                                                    </Link>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            
                        }
                        </tbody>
                    </table>
                    <div className={styles.publishContainer}>
                        {
                            enableComponent === 'project-edit' && component
                        }
                    </div>
                </div>
            </main>
      )
}