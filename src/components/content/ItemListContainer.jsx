import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom"
import { dbConsult } from '../../utilFunctions/utilFunctions';

const Home = () => {

  const [products, setProducts] = useState([]);
   useEffect(() => {
    dbConsult("./json/products.json").then(products => {
      const cardProduct = products.map(product =>
        <div className="card mb-3 cardProduct p-0" key={product.id}>
          <img src={"./img/" + product.img} alt={product.product} className="img-fluid p-0 rounded p-1" />
          <div className="card-body text-center">
            <h6 className="card-title">{product.product}</h6>
            <h6 className="card-subtitle text-muted">{product.model}</h6>
          </div>
          <Link to={"/product/" + product.id}><button className='btn btn-dark w-100 border-0'>Ver producto</button></Link>
        </div>
      )
      setProducts(cardProduct)
   })  
  }, []);


  return (
    <>
      <div className='container-fluid d-flex justify-content-center my-3'>
        <div className='row container-fluid d-flex ms-4'>
          {products}
        </div>
      </div>
    </>
      
  );
}

export default Home;
