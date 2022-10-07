import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom"
import ProductDetail from './ProductDetail';

export const Product = () => {
const [product, setProduct] = useState([]);
const {id} = useParams()

useEffect(() => {
  fetch('../json/products.json')
  .then(response => response.json())
  .then(productos => {
    const product1 = productos.find(productoArray => productoArray.id == id)
    setProduct(product1)
  })
}, []);

  return (
    <>
      <ProductDetail product={product}/> 
    </>
  );
}

export default Product;
