import React from 'react';

const ItemListContainer = ({productName, productValue, productDescription, productFeatures}) => {
  return (
    <>
      <div className="card text-white bg-secondary m-5" style={{maxWidth: '20rem'}}>
        <div className="card-header h3">{productName}</div>
        <i class="fa-solid fa-microchip text-center my-3 h4"></i>
        <div className="card-body">
          <h4 className="card-title">${productValue}</h4>
          <p className="card-text">{productDescription}</p>
          <p className="card-text">{productFeatures[0]}</p>
          <p className="card-text">{productFeatures[1]}</p>
          <p className="card-text">{productFeatures[2]}</p>
          <p className="card-text">{productFeatures[3]}</p>
        </div>
          <a href="#" className="text-center h5 my-3">Comprar Ahora</a>
        <i class="fa-solid fa-plus my-3 text-center"></i>     
      </div>
    </>
  );
}

export default ItemListContainer;
