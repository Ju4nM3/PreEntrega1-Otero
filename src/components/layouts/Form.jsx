import React from 'react';

const Form = ({SearchingPlaceholder}) => {
  return (
    <>
    <div className='container-fluid d-flex'>
      <form className="d-flex w-75 my-2">
        <input className="form-control me-sm-2" type="text" placeholder={SearchingPlaceholder} />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
      
    </>
  );
}

export default Form;
