import styles from './Header.module.css'

import { SignOut } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

export function Header({signOut}){
    
    return(
        <nav className={styles.header}>
                <h1>PetsHub</h1>
                <button className={styles.buttonExit} onClick = {() => signOut()} >Sair<SignOut /></button>
        </nav>
    )
}