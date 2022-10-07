import React from 'react';

const DropdownCategories = ({firstCategorie, secondCategorie, thirdCategorie, fourthCategorie}) => {
  return (
    <>
      <div className="col-lg-4 py px-xl-4">
        <div className="list-group ">
          <a className="list-group-item" href="#">{firstCategorie}</a>
          <a className="list-group-item" href="#">{secondCategorie}</a>
          <a className="list-group-item" href="#">{thirdCategorie}</a>
          <a className="list-group-item" href="#">{fourthCategorie}</a>
        </div>
      </div>
    </>
  );
}

export default DropdownCategories;
