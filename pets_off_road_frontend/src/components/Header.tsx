import styles from './Header.module.css'

import { SignOut } from 'phosphor-react';

export function Header(){

    return(
        <header className={styles.header}>
                <h1>PetsHub</h1>
                <button className={styles.buttonExit}>Sair <SignOut /></button>
        </header>
    )
}