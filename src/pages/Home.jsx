import { Link } from "react-router-dom";

import React from "react";
import Foryou from "../componentes/ForYouItens/Foryou";
import PopularSearch from "../componentes/PopularSearchCarousel/PopularSearch";
import Parceiros from "../componentes/Parceiros/Parceiros";

const Home = () => {
  return (
    <div className="home">
      <Foryou />
      <PopularSearch />
      <Parceiros />

      <div style={{display: "flex", justifyContent: "center", marginTop: '25px'}}>
        
      <Link to='/produtos'><button style={{width: '80%', padding: '20px', fontSize: '1.2em', backgroundColor: 'black'}}>VER LANCHES</button></Link>
      </div>
    </div>
  );
};

export default Home;
