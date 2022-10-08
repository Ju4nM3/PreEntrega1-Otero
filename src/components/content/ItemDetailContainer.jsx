import React from 'react';

const ProductDetail = ({product}) => {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-4">
            <img src={`../img/${product.img}`} className="img-fluid rounded-start" alt={product.product}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{product.product}</h3>
              <h4 className="card-subtitle text-muted">{product.model}</h4>
              <h3 className="card-subtitle my-3">${product.value}</h3>
            </div>
            <div className='card-body'>
              <ul>
                <h6 className=''>Especificación:</h6>
                <li className="py-1"><p className="card-text">{product.firstFeature}</p></li>
                <li className="py-1"><p className="card-text">{product.secondFeature}</p></li>
                <li className="py-1"><p className="card-text">{product.thirdFeature}</p></li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
