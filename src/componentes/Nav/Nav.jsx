import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import home from "../../images/undraw_sweet_home_dkhr.svg";

//hooks cep
import { useFetchCep } from "../../hooks/useFetchCep";

const Nav = () => {
  // transitions

  const[transitionModal, setTransitionModal] = useState(``)



  //modais e menu
  const [modal, setModal] = useState(null);
  const [modalCart, setModalCart] = useState(null);

  const [error, setError] = useState(null);
  const [cep, setCep] = useState();
  const [local, setLocal] = useState(null);
  const {
    fetchCep,
    error: CepError,
    logradouro,
    localidade,
    bairro,
  } = useFetchCep(cep);

  const handleSearchCep = (e) => {
    e.preventDefault();

    if (isNaN(cep)) {
      setError("Calma lá... Apenas números :)");
    } else if (cep.length != 8) {
      setError("um CEP contém 8 números");
    } else {
      setError(null);

      fetchCep(cep);
    }
  };

  useEffect(() => {
    setLocal(logradouro);
    setModal(null);
  }, [logradouro, localidade, bairro]);

  //autoCartClose

  const autoCartClose = () => {
    setTimeout(() => {
      setModalCart(null);
    }, 1000);
  };

  return (
    <>
      <div className={styles.sticky}>
        <div className={styles.resposiveMaxDiv}>
          <nav className={styles.nav_container}>
            <Link to="/">
              <div className={styles.brand}>
                <h2>We</h2>
                <h1>Lanches</h1>
                <i class="fa-solid fa-cookie-bite"></i>
              </div>
            </Link>
            <ul>
                <li>
                  <form className="elementsResponsive">
                    <input type="text" placeholder="Encontre um item"/>
                  </form>
                </li>
              <li>
              <i class="fa-solid fa-magnifying-glass"></i>
              </li>
              <li onClick={() => setModalCart(1)}>
              <p  className="elementsResponsive">Carrinho</p>
                <i
                  className={
                    !modalCart
                      ? "fa-solid fa-cart-shopping"
                      : `fa-solid fa-cart-shopping ${styles.active}`
                  }
          
                ></i>
          
              </li>
              <li>
              <p className="elementsResponsive">Login</p>
                <i className="fa-solid fa-user"></i>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className={styles.adress_container}
          onClick={() => {
            setModal(1);
          }}
        >
          <i class="fa-solid fa-location-dot"></i>
          {!local && <p>Insira seu local</p>}
          {local && <p>{local}</p>}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            class="sc-dwLEzm hIJdYR"
          >
            <path
              fill="#ff922c"
              d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"
            ></path>
          </svg>
        </div>
      </div>

      {/* MODAL CEP */}
      {modal && (
        <div
          className={styles.background_cep_modal}
          onClick={() => {
            setModal(null);
          }}
        ></div>
      )}

      {modal && (
        <div className={styles.modal_container}>
          <form
            className={styles.form_cep_container}
            onSubmit={handleSearchCep}
          >
            <img
              src={home}
              alt=""
            />
            <input
              type="text"
              name=""
              id="cep-input"
              placeholder="Insira seu CEP"
              required
              onChange={(e) => {
                setCep(e.target.value), setError(null);
              }}
              maxLength={8}
              value={cep}
            />
            <p
              onClick={() => {
                window.open(
                  "https://buscacepinter.correios.com.br/app/endereco/index.php",
                  "_blank"
                );
              }}
            >
              Não sabe seu CEP?
            </p>
            <button>BUSCAR</button>
            {error && <p className={styles.errorMessage}>{error}</p>}
            {CepError && <p className={styles.errorMessage}>{CepError}</p>}
          </form>
        </div>
      )}
      {/* -------------------- */}

      {/* MODAL CARRINHO */}
      {modalCart && (
        <>
          <div
            className={styles.cart_background}
            onMouseEnter={() => autoCartClose}
            onClick={() => setModalCart(null)}
            
          >
          </div>

          <div className={modalCart ? `${styles.cart_container} ${styles.right}` : styles.cart_container}>
            
            <h1>SEU CARRINHO</h1>
            {!logradouro && <h4>Insira seu local</h4>}
            {logradouro && <h4>{logradouro}</h4>}
          </div>
        </>
      )}

      {/* -------------------- */}

    
    </>
  );
};

export default Nav;
