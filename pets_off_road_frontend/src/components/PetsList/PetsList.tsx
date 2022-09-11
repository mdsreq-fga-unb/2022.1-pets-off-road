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
    {
        id:1,
        nome: "Mingau",
        raca: "Poodle",
        anoResgate: "2020",
        idade: "2",
        cor: "branco",
        status: "a procura"
    },
    {
        id:2,
        nome: "Floquinho",
        raca: "Cocker",
        anoResgate: "2017",
        idade: "5",
        cor: "verde",
        status: "Adotado"
    },
    {
        id:3,
        nome: "Floquinho",
        raca: "Cocker",
        anoResgate: "2017",
        idade: "5",
        cor: "verde",
        status: "Adotado"
    },
    {
        id:4,
        nome: "Mingau",
        raca: "Poodle",
        anoResgate: "2020",
        idade: "2",
        cor: "branco",
        status: "a procura"
    },
    {
        id:5,
        nome: "Floquinho",
        raca: "Cocker",
        anoResgate: "2017",
        idade: "5",
        cor: "verde",
        status: "Adotado"
    },
    {
        id:6,
        nome: "Floquinho",
        raca: "Cocker",
        anoResgate: "2017",
        idade: "5",
        cor: "verde",
        status: "Adotado"
    },
    {
        id:7,
        nome: "Mingau",
        raca: "Poodle",
        anoResgate: "2020",
        idade: "2",
        cor: "branco",
        status: "a procura"
    },
    {
        id:8,
        nome: "Floquinho",
        raca: "Cocker",
        anoResgate: "2017",
        idade: "5",
        cor: "verde",
        status: "Adotado"
    },
    {
        id:9,
        nome: "Floquinho",
        raca: "Cocker",
        anoResgate: "2017",
        idade: "5",
        cor: "verde",
        status: "Adotado"
    },
    {
        id:10,
        nome: "Mingau",
        raca: "Poodle",
        anoResgate: "2020",
        idade: "2",
        cor: "branco",
        status: "a procura"
    },
    {
        id:11,
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
