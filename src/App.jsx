import { Routes, Route, HashRouter } from "react-router-dom";

//componentes
import Nav from "./componentes/Nav/Nav";
import Footer from "./componentes/Footer/Footer";

//pages
import Home from "./pages/Home";
import { Products } from "./pages/Products";

function App() {
  return (
    <>
      <div>
        <HashRouter>
          <Nav />
          <div className="main">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/produtos"
                element={<Products />}
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
