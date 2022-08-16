
import styles from './HomeScreen.module.css'

import ProfileLogo from '../assets/profile-logo.svg'
import Dogs from '../assets/doguinhos3.svg'
import Hands from '../assets/hands.svg'

import {Header} from '../components/Header'

export function HomeScreen({typeUser, userName}){

    return (
        <>
            <Header />


            <main className={styles.main}>
                <div className={styles.services}>
                    <div className={styles.welcomeMessage}>
                        <h1>Bem vindo(a), {userName}</h1>
                        <p>Menu</p>
                    </div>
                    <section className={styles.serviceContent}>
                        <div className={styles.description}>
                            <h1>Minha Página</h1>
                            <p>Sua página pessoal. Deixe as informações necessárias para a sua rede aqui</p>
                        </div>
                    
                        <div className={styles.containerPhoto}>
                            <img src={ProfileLogo} alt="Icone de perfil" />
                        </div>
                    
                    </section>
                    <section className={styles.serviceContent}>
                        <div className={styles.description}>
                            <h1>Listagem Geral de Animais</h1>
                            <p>Listagem de animais de toda a organização.</p>
                        </div>
                    
                        <div className={styles.containerPhoto}>
                            <img src={Dogs} alt="Icone de perfil" />
                        </div>
                    </section>
                    <section className={styles.serviceContent}>
                        <div className={styles.description}>
                            <h1>Voluntários</h1>
                            <p>Listagem de todos os  voluntários.</p>
                        </div>
                    
                        <div className={styles.containerPhoto}>
                            <img src={Hands} alt="Icone de perfil" />
                        </div>
                    
                    </section>
                </div>
            </main>
        </>
    )
}