import { useEffect } from "react";
import { useState } from "react";
import styles from "./Products.module.css";

export const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);

  const [backToTop, setBackToTop] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.npoint.io/ca4b28c56310691ac2d6");
      const resData = await res.json();
      setData(resData);
      setLoading(false);
    } catch (error) {}
  };

  // listar produtos ao carregar página
  useEffect(() => {
    fetchData();
  }, []);

  // Back-to-top
  function myFunction() {
    if (scrollY >= 1200) {
      setBackToTop(1);
    } else if (scrollY <= 1199) {
      setBackToTop(null);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", myFunction);
  }, []);

  function handleBackToTop() {
    window.scrollTo(0, 0);
  }

  // Fim Back to top

  return (
    <div className={styles.mainProdutos}>
      <h2>Lanches</h2>
      {loading && <h2>Listando produtos...</h2>}
      <div className={styles.productsContainer}>
        {data &&
          data.map((produto) => (
            <li key={produto.id}>
              <div
                className={styles.imgProduto}
                style={{ backgroundImage: `url(${produto.img})` }}
              ></div>
              <p className={styles.nomeProduto}>{produto.nome}</p>

              <div className={styles.precoAdd}>
                <p className={styles.preco}>R$ {produto.preco}</p>
                <p className={styles.addIcon}>+</p>
              </div>
            </li>
          ))}
      </div>

      {backToTop && (
        <div
          className={styles.backToTopBtn}
          onClick={handleBackToTop}
        >
          <i className="fa-solid fa-up-long"></i>
        </div>
      )}
    </div>
  );
};
