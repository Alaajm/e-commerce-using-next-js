import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero.svg";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best e-commerce destination</h1>
        <p className={styles.description}>
          Veniam reprehenderit est esse ipsum. Dolore aute aliqua ullamco aliqua
          ea enim voluptate sint exercitation elit sit non. Ullamco labore culpa
          dolore sit qui ea adipisicing amet proident culpa eu.
        </p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image
          src={Hero}
          width={100}
          height={100}
          className={styles.img}
          alt="hero-image"
        />
      </div>
    </div>
  );
}
