//Hooks e funcionalidades
import { useState } from 'react';
import { Header } from '../components/Header/Header';

//Estilos
import styles from './ProfileVonluteer.module.css'

//Imagens e Icones

import PetsLogo from '../assets/PetsLogo.png'
import DogIcon from '../assets/dogg.png'
import { Plus, GearSix} from 'phosphor-react'
import { Feed } from '../components/Feed/Feed';
import { ProjectList } from '../components/ProjectList/ProjectList';
import { ProjectForm } from '../components/ProjetoForm/ProjectForm';
import { Link } from 'react-router-dom';
import { ProjectEdit } from '../components/ProjectEdit/ProjectEdit';
import { ProjectSearch } from '../components/ProjectSearch/ProjectSearch';

/*                           */


export function ProfileVonlunteer(){
    const [component, setComponent] = useState<string>("feed");
    
    return(
        <>
            <Header />
            <main className={styles.main}>
                <div>
                    <aside className={styles.sideBar}>
                        <div className={styles.iconContainer}>
                            <button className={styles.editButton}>
                                <GearSix size={32} />
                            </button>
                        </div>
                        <div className={styles.className}>
                            <img className={styles.profilePicture} src={PetsLogo}/>
                    
                            <div className={styles.containerInfo}>
                    
                                <span className={styles.info}>{localStorage.getItem('nome')}</span>
                    
                                <span className={styles.info}>{localStorage.getItem('email')}</span>
                    
                                <span className={styles.info}>{localStorage.getItem('uf')} </span>
                    
                                <span className={styles.info}>{localStorage.getItem('cidade')}</span>
                    
                            </div>
                        </div>
                    </aside>
                </div>
                
                <div className={styles.mainContainer}>
                    <div className={styles.containerHeadermain}>
                        <div className={styles.containerButtons}>
                            
                            <button className={styles.activeButton} onClick={() => setComponent("feed")}>
                                <span className={styles.activeButtonText}>Feed</span>
                            </button>

                            <button className={styles.activeButton} onClick={() => setComponent("project-form")}>
                                <span className={styles.activeButtonText}>Criar Projeto</span>
                            </button>

                            <button className={styles.activeButton} onClick={() => setComponent("project-list")}>
                                <span className={styles.activeButtonText}>Meus Projetos</span>
                            </button>

                            <button className={styles.activeButton} onClick={() => setComponent("project-search")}>
                                <span className={styles.activeButtonText}>Buscar Projetos</span>
                            </button>

 
                        </div>
                    </div>
                    <div className={styles.publishContainer}>
                        {
                            component === 'feed' && <Feed /> ||
                            component === 'project-form' && <ProjectForm /> ||
                            component === 'project-list' && <ProjectList /> ||
                            component === 'project-search' && <ProjectSearch /> 
                        }
                    </div>
                </div>
            </main>
        </>
    )
}