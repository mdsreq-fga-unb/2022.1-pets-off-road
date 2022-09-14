//Hooks e funcionalidades
import { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import {Link} from 'react-router-dom'

//Estilos
import styles from './ProfileVonluteer.module.css'

//Imagens e Icones

import PetsLogo from '../assets/PetsLogo.png'
import DogIcon from '../assets/dogg.png'
import { Plus, GearSix} from 'phosphor-react'
import { Feed } from '../components/Feed/Feed';
import { PetsList } from './../components/PetsList/PetsList';
import { VolunteerList } from './../components/VolunteerList/VolunteerList';
import { AnimalForm } from './../components/AnimalForm/AnimalForm';
import axios from 'axios';



export function ProfileProject(){
    const [component, setComponent] = useState<string>("feed");

    let[posts, setPosts]: any = useState({});
    
    useEffect(()=>{
        axios.get('http://159.223.189.251:3030'+window.location.pathname)
            .then((data)=>{setPosts(data.data)})
            .catch(err=>{console.log(err)})
    }, [])
    

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
                    
                                <span className={styles.info}>{posts.nome} </span>
                    
                                <span className={styles.info}>Quantidade de Membros: {posts.numero_membros} </span>
                    
                                <span className={styles.info}>{posts.email} </span>

                                <span className={styles.info}>{posts.telefone} </span>
                    
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

                            <button className={styles.activeButton} onClick={() => setComponent("pets-list")}>
                                <span className={styles.activeButtonText}>Animais Cadastrados</span>
                            </button>
                            
                            <button className={styles.activeButton} onClick={() => setComponent("volunteer-list")}>
                                <span className={styles.activeButtonText}>Voluntários do Projeto</span>
                            </button>
                            
                            <button className={styles.activeButton} onClick={() => setComponent("animal-form")}>
                                <span className={styles.activeButtonText}>Cadastrar Animal</span>
                            </button>
                            
                            <div>
                                <img className={styles.iconHeader} src={DogIcon} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.publishContainer}>
                        {
                            component === 'feed' && <Feed /> ||
                            component === 'pets-list' && <PetsList /> ||
                            component === 'volunteer-list' && <VolunteerList /> ||
                            component === 'animal-form' && <AnimalForm />
                        }
                    </div>
                </div>
            </main>
        </>
    )
}