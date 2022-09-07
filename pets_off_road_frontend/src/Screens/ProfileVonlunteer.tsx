//Hooks e funcionalidades
import { useState } from 'react';
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


export function ProfileVonlunteer(){
    const [component, setComponent] = useState<string>("feed");

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
                        <div className={styles.containerButtons}>
                            
                            <button className={styles.activeButton} onClick={() => setComponent("pets-list")}>
                                <span className={styles.activeButtonText}>Meus Pets</span>
                            </button>
                            
                            <button className={styles.activeButton} onClick={() => setComponent("volunteer-list")}>
                                <span className={styles.activeButtonText}>Voluntários</span>
                            </button>
                            
                            <button className={styles.activeButton} onClick={() => setComponent("feed")}>
                                <span className={styles.activeButtonText}>Feed</span>
                            </button>
                            
                            <button className={styles.activeButton} onClick={() => setComponent("animal-form")}>
                                <span className={styles.activeButtonText}>Adicionar Animal</span>
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