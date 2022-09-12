import styles from './PetsList.module.css'

export  function PetsList() {
    const animalList = [
    {
        id:0,
        nome: "Floquinho",
        raca: "Cocker",
        anoResgate: "2017",
        idade: "5",
        cor: "verde",
        status: "Adotado"
    },
]
  
  
    return (
    <main>
            <h1>Meus Pets</h1>

            <div className={styles.div}>
                <header className={styles.pages}>
                    Aqui vai passar as funcionalidades
                </header>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Raça</th>
                            <th>Ano de Resgate</th>
                            <th>Idade</th>
                            <th>Cor</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            animalList.map((item) => {
                                return(
                                    <tr key={item.id}>
                                        <td className={styles.capitalize}>{item.nome}</td>
                                        <td className={styles.capitalize}>{item.raca}</td>
                                        <td className={styles.capitalize}>{item.anoResgate}</td>
                                        <td className={styles.capitalize}>{item.idade}</td>
                                        <td className={styles.capitalize}>{item.cor}</td>
                                        <td className={styles.capitalize}>{item.status}</td>
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
