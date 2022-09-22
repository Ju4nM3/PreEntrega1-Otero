import React from 'react';

const Form = ({SearchingPlaceholder}) => {
  return (
    <>
      <form className="d-flex w-100">
        <input className="form-control me-sm-2" type="text" placeholder={SearchingPlaceholder} />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </>
  );
}

export default Form;
