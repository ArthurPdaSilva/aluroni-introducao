import React from "react";
import styles from "./Cardapio.module.scss";
// Transforma o svg puro em um componente React
import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from "./Buscador";
// import logo from '../../assets/logo.svg'

export default function Cardapio() {
  const [busca, setBusca] = React.useState("");
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header} >
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
      </section>
    </main>
  );
}
