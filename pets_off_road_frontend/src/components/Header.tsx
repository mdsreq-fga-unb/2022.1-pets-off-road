import styles from './Header.module.css'

import { SignOut } from 'phosphor-react';

import { Link } from 'react-router-dom';

export function Header(){

    return(
        <header className={styles.header}>
                <h1>PetsHub</h1>
                <Link to="/"><button className={styles.buttonExit}>Sair <SignOut /></button></Link>
        </header>
    )
}