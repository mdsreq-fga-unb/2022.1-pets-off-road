//Hooks e funcionalidades
import { useContext, useState } from 'react';
import {Link} from 'react-router-dom'

//Estilos
import styles from './Cadastro.module.css'

//Imagens e Icones
import Logo from '../assets/logo.svg'
import {ArrowCircleLeft, HouseLine, Users} from 'phosphor-react'
import { AuthContext } from '../context/AuthContext';



export function Cadastro(){
    const {
        cadastro
    } = useContext(AuthContext);
    const [profileType, setProfileType] = useState(null);
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');

    const handleSubmit = async () => {
        const values = {
            cpf: cpf,
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senha,
            uf: uf,
            cidade: cidade,
            endereco: endereco
        }
        await cadastro(values)
    }

    return(
        <div className={styles.screen}>
            <div className={styles.welcomeBox}>
                <Link to="/"><ArrowCircleLeft/></Link>
                <img className={styles.logo} src={Logo} alt="Logo da Petshub" />
            </div>

            <div className={styles.registrationBox}>
                <div className={styles.welcomeMessage}> 
                    <h1>Bem-vindo à PetsHub</h1>
                    <p>Cadastra-se na nossa plataforma</p>
                </div>

                {profileType === null && 

                <div className={styles.chooseProfile} >
                    <button className={styles.profileProject} onClick={() => setProfileType('projeto')}><HouseLine size={28}/> Sou Projeto</button>

                    <button className={styles.profileVolunteer} onClick={() => setProfileType('voluntario')}><Users size={28}/> Voluntário</button>
                </div>
                
                ||
                
                profileType === "projeto" && <form className={styles.formCadastro}>
                
                <ArrowCircleLeft onClick={() => setProfileType(null)}/>

                    <label>Nome do Projeto</label>
                    <input type="text" placeholder="Ex: Nome-do-Projeto"/>

                    <label>Endereço de email</label>
                    <input type="email" placeholder="@mail.com.br"/>

                    <label>UF</label>
                    <input type="text" placeholder="Ex: DF"/>

                    <label>Cidade</label>
                    <input type="text" placeholder="Ex: Brasília"/>

                    <label>CPF/CNPJ</label>
                    <input type="text" placeholder="XXX.XXX.XXX-XX"/>

                    <label>Telefone</label>
                    <input type="tel" placeholder="(DDD) XXXXX-XXXX"/>

                    <label>Senha</label>
                    <input type="password" placeholder="Mínimo 8 caracteres" />

                    <button type="submit">Cadastrar</button>
                </form>  
                
                || 
                
                profileType === "voluntario" && <form onSubmit={handleSubmit()} className={styles.formCadastro}>
                
                <ArrowCircleLeft onClick={() => setProfileType(null)}/>

                <label>Nome</label>
                <input onChange={(e) => setNome(e)} type="text" placeholder="Ex: João Da Silva"/>

                <label>Endereço de email</label>
                <input type="email" placeholder="@mail.com.br" onChange={(e) => setEmail(e)}/>

                <label>UF</label>
                <input type="text" placeholder="Ex: DF" onChange={(e) => setUF(e)}/>

                <label>Cidade</label>
                <input type="text" placeholder="Ex: Brasília" onChange={(e) => setCidade(e)}/>

                <label>Endereço</label>
                <input type="text" placeholder="Ex: Quadra 2" onChange={(e) => setEndereco(e)}/>

                <label>CPF</label>
                <input type="text" placeholder="XXX.XXX.XXX-XX" onChange={(e) => setCpf(e)}/>

                <label>Telefone</label>
                <input type="tel" placeholder="(DDD) XXXXX-XXXX" onChange={(e) => setTelefone(e)}/>

                <label>Senha</label>
                <input type="password" placeholder="Mínimo 8 caracteres" onChange={(e) => setSenha(e)}/>

                <button type="submit">Cadastrar</button>
            </form>
            }
            </div>
        </div>
    )
}