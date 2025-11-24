import Header from "../../components/header"
import styles from "./App.module.scss"
import ImgBike from "../../assets/ImgBike.png"
import MapStation from "../../components/mapStation"
import CardBike from "../../components/cardBike"



const Home = () => {
  return (
    <body>
      <Header/>
      <main>
        <section className={styles.about}>
          <h1>Pedalar não tem preço. Vá de Unobike.</h1>
          <p>
            Acreditamos que a mobilidade urbana é um direito, não um luxo. Por isso, a Unobike quebra barreiras: 
            oferecemos a mesma tecnologia, segurança e praticidade dos grandes apps, mas sem mensalidades ou taxas de desbloqueio. 
            É só baixar, encontrar a estação mais próxima e redescobrir sua cidade com total liberdade.
            O caminho é seu, e o acesso é para todos.
          </p>
          <img src={ImgBike} alt="" />
        </section>
        <section className={styles.stations}>
          <h2>Estações Disponíveis</h2>
          <MapStation/>
        </section>
        <section className={styles.bike}>
          <h2>Sua liberdade é gratuita. É só pegar e pedalar.</h2>
          <h3>Conheça a nossa bicicleta:</h3>
          <CardBike/>
        </section>
      </main>
    </body>
  )
}

export default Home;