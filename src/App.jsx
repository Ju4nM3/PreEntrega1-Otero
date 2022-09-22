import React from 'react';
import Navbar from './components/Navbar'
import Brand from './components/Brand';
import ItemListContainer from './components/ItemListContainer';
import './App.css';



const App = () => {
  const features=["Característica 1", "Característica 2", "Característica 3", "Característica 4"];
  return (
    <>
      <Brand/>
      <Navbar/>
      <ItemListContainer productName="Artículo" productValue="Precio" productDescription="Acá va una pequeña descripción del producto" productFeatures={features} />
    </>
  );
}

export default App;
