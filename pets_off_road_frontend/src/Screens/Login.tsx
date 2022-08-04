import Bingo from '../assets/bingo.svg'
import Caramelo from '../assets/caramelo.svg'
import Doguinhos from '../assets/doguinhos.svg'
import Doguinhos2 from '../assets/doguinhos2.svg'
import Golden from '../assets/golden.svg'
import Loki from '../assets/loki.svg'
import Thor from '../assets/thor.svg'

import styles from './Login.module.css'

export function Login(){

    return(
        <div>
            <div className={styles.containerLogin}>
                <header>
                    <h1>PetsHub</h1>
                </header>

                <div className={styles.containerForm}>
                    <h1>Bem-vindo à PetsHub</h1>
                    <p>Faça o login para acessar a sua conta</p>

                    <form>
                        <p>Endereço de email</p>
                        <input type="email"  placeholder="nome@mail.com"/>

                        <p>Senha</p>
                        <input type="password" placeholder="senha"/>
                        
                        <div className={styles.containerCheckPassword}>
                            <input type="checkbox" />
                            <label>Lembrar minha senha?</label>

                            <a href="#">Esqueceu a senha?</a>
                        </div>

                        <button type="submit">Entrar</button>

                        <p>Ainda não possui conta? <a href="#">Criar Conta</a></p>
                    </form>
                </div>
            </div>

            <div className={styles.containerGridPhotos}>
                <div className={styles.containerRow}>
                    <img src={Bingo} />
                    <div>
                        <img src={Doguinhos} />
                        <img src={Doguinhos2} />
                    </div>
                    <img src={Golden} />
                </div>

                <div className={styles.containerRow}>
                    <img src={Thor}/>
                    <img src={Loki} />
                    <img src={Caramelo}/>
                </div>
            </div>
        </div>
    )
}