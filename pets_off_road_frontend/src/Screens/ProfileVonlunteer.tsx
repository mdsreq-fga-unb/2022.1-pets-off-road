//Hooks e funcionalidades
import { useState } from 'react';
import { Header } from '../components/Header';
import {Link} from 'react-router-dom'

//Estilos
import styles from './ProfileVonluteer.module.css'

//Imagens e Icones
import Logo from '../assets/logo.svg'
import PetsLogo from '../assets/PetsLogo.png'
import DogIcon from '../assets/dogg.png'
import { Plus, GearSix} from 'phosphor-react'

interface Props{
    typeUser?: string;
    userName?: string;
}

export function ProfileVonlunteer(){
    const [profileType, setProfileType] = useState<string | null>(null);

    return(
        <>
            <Header />

            <main className={styles.main}>
                <div className={styles.sideBar}>
                    <div className={styles.iconContainer}>
                        <button className={styles.editButton}>
                            <GearSix size={32} />
                        </button>
                    </div>
                    <div className={styles.className}>
                        <img className={styles.profilePicture} src={PetsLogo}/>
                        <div className={styles.containerInfo}>
                            <div>
                                <span>Nome</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mainContainer}>
                    <div className={styles.containerHeadermain}>
                        <div className={styles.containerButons}>
                            <button className={styles.activeButton}>
                                <span className={styles.activeButtonText}>Meus Pets</span>
                            </button>
                            <button className={styles.activeButton}>
                                <span className={styles.activeButtonText}>Voluntários</span>
                            </button>
                            <button className={styles.activeButton}>
                                <span className={styles.activeButtonText}>Feed</span>
                            </button>
                        </div>
                        <img className={styles.iconHeader} src={DogIcon} />
                    </div>
                    <div className={styles.publishContainer}>
                        <div className={styles.publishContent}>
                            <div className={styles.headerPublish}>
                                <span className={styles.headerTitle}>Faça sua publicação</span>
                                <Plus size={20} />
                            </div>
                            <textarea className={styles.inputPublish}>
                                Escreva aqui...
                            </textarea>
                        </div>
                        <button className={styles.publishButton}>
                            <span className={styles.activeButtonText}>Publicar</span>
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}