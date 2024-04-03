import { useEffect } from "react";
import { useState } from "react";

export const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.npoint.io/3c646e6c1b17e2949805");
      const resData = await res.json();
      setData(resData);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading && <h2>Listando produtos...</h2>}

      {data && data.map((produto) => (
        <div>
          
            <li key={produto.id}>{produto.nome}</li>
           
            {produto.sabores && <p>{produto.sabores}</p>}
            <hr />
            
        </div>
        
      ))}
      
    </div>
  );
};
