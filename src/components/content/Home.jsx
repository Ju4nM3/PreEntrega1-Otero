import React, {useState, useEffect} from 'react';
import Product from './Product';
import { Link } from "react-router-dom"

const Home = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const visualizeProducts = async () => {
      const response = await fetch('./json/products.json')
      const products = await response.json()
      const cardProduct = products.map(product =>
        <div className="card mb-3 cardProduct p-0" key={product.id}>
          <img src={"./img/" + product.img} alt={product.product} className="img-fluid p-0 rounded p-1" />
          <div className="card-body">
            <h6 className="card-title">{product.product}</h6>
            <h6 className="card-subtitle text-muted">{product.model}</h6>
          </div>
          <button className='btn btn-dark'><Link to={"/product/" + product.id}>Comprar producto</Link></button>
        </div>
      )
      return cardProduct
    } 
    visualizeProducts().then(products => setProducts(products))  
  }, []);



  return (
    <div className='row container-fluid d-flex'>
      {products}
    </div>
      
  );
}

export default Home;
