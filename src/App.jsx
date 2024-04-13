import { Routes, Route, HashRouter } from "react-router-dom";

//componentes
import Nav from "./componentes/Nav/Nav";
import Footer from "./componentes/Footer/Footer";

//pages
import Home from "./pages/Home";
import { Products } from "./pages/Products";

// context
import { CartContext } from "./context/CartContext";
import { useContext, useEffect } from "react";

function App() {

  // Pegar itens no LocalStorage e setar no cartItems do CartContext

  const getSavedData = ()=>{
    const data = localStorage.getItem('prodCart')
    
    if(data == undefined){
      return []
    }else{
      return JSON.parse(localStorage.getItem('prodCart'))
    }
    
  }
const{setCartItems} = useContext(CartContext)
useEffect(()=>{
  
  const items = getSavedData()
  setCartItems(items)
},[])

 
  
    
  
  
  return (
    <>
      <div>
        <HashRouter>
          <Nav />
          <div className="main">
            <Routes>
              
              <Route
                path="/"
                element={<Home/>}
              />
              <Route
                path="/produtos"
                element={<Products getSavedData={getSavedData}/>}
              />
            </Routes>
          </div>
          <Footer />
        </HashRouter>
      </div>
    </>
  );
}

export default App;
