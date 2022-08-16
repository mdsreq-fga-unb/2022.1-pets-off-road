import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Bingo from '../assets/bingo.svg'
import Caramelo from '../assets/caramelo.svg'
import Doguinhos from '../assets/doguinhos.svg'
import Doguinhos2 from '../assets/doguinhos2.svg'
import Golden from '../assets/golden.svg'
import Loki from '../assets/loki.svg'
import Thor from '../assets/thor.svg'
import { AuthContext } from '../context/AuthContext'

import styles from './Login.module.css'

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {
        login
    } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        await login(email,password);
        event.preventDefault();
      }

    return(
        <div>
            <div className={styles.containerLogin}>
                <div className={styles.containerForm}>
                    <header className={styles.header}>
                        <h1>PetsHub</h1>
                    </header>

                    <form className={styles.formLogin} onSubmit={handleSubmit()}>
                        <header className={styles.headerForm}>
                            <h1>Bem-vindo à PetsHub</h1>
                            <p>Faça o login para acessar a sua conta</p>
                        </header>

                    
                        <div>
                            <p>Endereço de email</p>
                            <input type="email"  placeholder="nome@mail.com" onChange={ e => setEmail(e) }/>
                        </div>

                        <div>
                            <p>Senha</p>
                            <input type="password" placeholder="senha" onChange={ e => setPassword(e) }/>
                        </div>
                        
                        <div className={styles.containerCheckPassword}>
                            
                            <input type="checkbox" />
                            <label>Lembrar minha senha</label>
                            

                            <a href="#">Esqueceu a senha?</a>
                        </div>

                        <button className={styles.buttonSubmit} type="submit">Entrar</button>

                        <p>Ainda não possui conta? <Link to="/cadastro">Criar Conta</Link></p>
                    </form>
                </div>
                
                <div className={styles.containerGridPhotos}>
                    
                    <img src={Bingo} />
                    <div>
                        <img src={Doguinhos} />
                        <img src={Doguinhos2} />
                    </div>
                    <img src={Golden} />
                    
                    <img src={Thor}/>
                    <img src={Loki} />
                    <img src={Caramelo}/>
                    
                </div>
            </div>

        </div>
    )
}