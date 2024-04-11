import { useEffect, useReducer, useContext } from "react";
import { useState } from "react";
import styles from "./Products.module.css";
import { CartContext } from "../context/CartContext";






export const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const[itensCart, setItensCart] = useState([])
  const [backToTop, setBackToTop] = useState(null);


  

 
   

  // listar produtos
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.npoint.io/ca4b28c56310691ac2d6");
      const resData = await res.json();
      setData(resData);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  // Fim listar produtos

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


   // adicionar itens no carrinho

const{addCartContext, cartItems} = useContext(CartContext)
 const initState = [];

 function reducer(state, action){
  
  switch(action.type){
  
    case 'ADD':
      if(state.some((element)=>element.id == action.id)){
        return state
      }else{
        return [...state,
          {
            nome: action.nome,
            id: action.id
          }
        ]
  
      }
      
      
      
      
      
 }
}

  const [state, dispatch] = useReducer(reducer, initState)

  
  // add no carrinho
  


  const addCart = (nome, id)=>{
      dispatch({type: 'ADD', nome, id,})
    
      
      
      // state.forEach((element)=>{
      //   if(element.id == id){
      //     return
      //   } else{
      //     dispatch({type: 'ADD', nome, id,})
          
          
      // }
      //  })
      
    }
  
    useEffect(()=>{
      addCartContext(state)
    },[state])

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
                <p onClick={()=> addCart(produto.nome, produto.id)} id="item" className={styles.addIcon}>+</p>
                
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
