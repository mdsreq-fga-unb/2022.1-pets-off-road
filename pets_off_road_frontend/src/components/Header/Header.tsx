import styles from './Header.module.css'

import { SignOut } from 'phosphor-react';

import { Link } from 'react-router-dom';

export function Header(){

    return(
        <header className={styles.header}>
                <Link to="/profile"><h1>Petshub</h1></Link>
                <Link onClick={()=> localStorage.clear()} to="/"><button className={styles.buttonExit}> Sair <SignOut /></button></Link>
        </header>
    )
}