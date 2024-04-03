import styles from "./Parceiros.module.css";

const Parceiros = () => {
  return (
    <div className={styles.parceiros_container}>
      <h1>
        <span>We</span> Parceiros
      </h1>

      <div className={styles.parceiros}>
        <div className={styles.img} style={{backgroundImage: 'url(https://static.ifood.com.br/webapp/images/logo-smile-512x512.png)'}}></div>
        <h2>
          <span>We</span> + <span className={styles.ifood}>Ifood</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          sunt, debitis nisi quis soluta tenetur asperiores facilis excepturi
          voluptatibus nemo ex consequatur iusto id ipsum voluptatem est dolores
          optio necessitatibus!
        </p>
        <button>ver</button>
      </div>

      <div className={styles.parceiros}>
        <div className={styles.img} style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Rappi_backgr_logo.png/800px-Rappi_backgr_logo.png)'}}></div>
        <h2>
          <span>We</span> + <span className={styles.rappi}>Rappi</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          sunt, debitis nisi quis soluta tenetur asperiores facilis excepturi
          voluptatibus nemo ex consequatur iusto id ipsum voluptatem est dolores
          optio necessitatibus!
        </p>
        <button>ver</button>
      </div>
    </div>
  );
};

export default Parceiros;
