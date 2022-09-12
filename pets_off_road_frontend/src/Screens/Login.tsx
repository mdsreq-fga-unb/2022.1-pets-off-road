import axios from 'axios'
import { Link } from 'react-router-dom'
import Bingo from '../assets/bingo.svg'
import Caramelo from '../assets/caramelo.svg'
import Doguinhos from '../assets/doguinhos.svg'
import Doguinhos2 from '../assets/doguinhos2.svg'
import Golden from '../assets/golden.svg'
import Loki from '../assets/loki.svg'
import Thor from '../assets/thor.svg'
import { useNavigate } from 'react-router-dom'

import styles from './Login.module.css'
import { Barcode } from 'phosphor-react'

export function Login(){

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);

        const login = {
            email: data.get('email'),
            senha: data.get('senha')
        }
        
        try {
            const responseLogin = await axios.post('http://localhost:3030/user/login', login);
            localStorage.setItem('sessionToken', responseLogin.data.sessionToken);
            localStorage.setItem('cpf', responseLogin.data.cpf)
            localStorage.setItem('nome', responseLogin.data.nome)
            localStorage.setItem('email', responseLogin.data.email)
            localStorage.setItem('telefone', responseLogin.data.telefone)
            localStorage.setItem('uf', responseLogin.data.uf)
            localStorage.setItem('cidade', responseLogin.data.cidade)
            localStorage.setItem('nivel_acesso', responseLogin.data.nivel_acesso)
            return navigate('/profile')
        } catch (error) {
            alert('It was not possible to complete the login');
        }
    };

    return(
        <div className={styles.screen}>
            <div className={styles.containerLogin}>
                <div className={styles.containerForm}>
                    <header className={styles.header}>
                        <h1>PetsHub</h1>
                    </header>

                    <form className={styles.formLogin} onSubmit={handleSubmit}>
                        <header className={styles.headerForm}>
                            <h1>Bem-vindo à PetsHub</h1>
                            <p>Faça o login para acessar a sua conta</p>
                        </header>

                    
                        <div>
                            <p>Endereço de email</p>
                            <input required name="email" type="email"  placeholder="nome@mail.com"/>
                        </div>

                        <div>
                            <p>Senha</p>
                            <input required name="senha" type="password" placeholder="senha"/>
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