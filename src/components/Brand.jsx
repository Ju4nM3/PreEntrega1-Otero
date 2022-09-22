import React from 'react';
import Form from './Form';

const Brand = () => {
  return (
    <>
      <div className='container w-75 my-5'>
        <div className='row'>
          <div className="col-2 d-flex align-items-center justify-content-center  text-center">
            <a className="navbar-brand" href="#">Ju4nM3<br/>Componentes</a>
          </div>
          <div className='col-10 d-flex align-items-center justify-content-center'>
            <Form SearchingPlaceholder="Buscar Producto o Marca"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
