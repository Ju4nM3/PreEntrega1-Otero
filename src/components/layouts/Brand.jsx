import React from 'react';
import {Link} from 'react-router-dom'
import Form from './Form';

const Brand = () => {
  return (
    <>
      <div className='container w-75 my-5'>
        <div className='row'>
          <div className="col-2 d-flex align-items-center justify-content-center  text-center">
            <Link className="navbar-brand" to="/">Ju4nM3<br/>Componentes</Link>
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
