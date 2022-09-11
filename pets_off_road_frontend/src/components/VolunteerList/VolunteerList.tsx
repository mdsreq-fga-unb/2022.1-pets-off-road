import styles from './Volunteer.module.css'

export function VolunteerList() {
    const animalList = [
        {
            id:20,
            nome: "Tiago",
            email: "tiago.m@gmail.com",
            cpf: "144.578.065-78",
            papel: "Vendas",
            descricao: "Magna veniam ex labore incididunt. Nostrud irure minim deserunt nulla id enim ipsum do veniam ex labore incididunt.",
        },
        {
            id:21,
            nome: "Renan",
            email: "renan@gmail.com",
            cpf: "144.578.065-78",
            papel: "Doação",
            descricao: "Magna veniam ex labore incididunt. Nostrud irure minim deserunt nulla id enim ipsum do veniam ex labore incididunt.",
        },
        {
            id:22,
            nome: "Josué",
            email: "josuemane@gmail.com",
            cpf: "144.578.065-78",
            papel: "Doação",
            descricao: "Magna veniam ex labore incididunt. Nostrud irure minim deserunt nulla id enim ipsum do veniam ex labore incididunt.",
        },
        {
            id:23,
            nome: "Maria",
            email: "maria@outlook.com",
            cpf: "144.578.065-78",
            papel: "Adoção",
            descricao: "Magna veniam ex labore incididunt. Nostrud irure minim deserunt nulla id enim ipsum do veniam ex labore incididunt.",
        },
        {
            id:24,
            nome: "Pedro",
            email: "pedro.m@gmail.com",
            cpf: "144.578.065-78",
            papel: "Adoção",
            descricao: "Magna veniam ex labore incididunt. Nostrud irure minim deserunt nulla id enim ipsum do veniam ex labore incididunt.",
        },
    ]
      
      
        return (
        <main>
                <h1>Voluntários do Projeto</h1>
    
                <div className={styles.div}>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>CPF</th>
                                <th>Papel</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                animalList.map((item) => {
                                    return(
                                        <tr key={item.id}>
                                            <td className={styles.capitalize}>{item.nome}</td>
                                            <td>{item.email}</td>
                                            <td>{item.cpf}</td>
                                            <td className={styles.capitalize}>{item.papel}</td>
                                            <td>{item.descricao}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </main>
      )
    }
