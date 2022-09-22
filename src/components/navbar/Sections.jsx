import React from 'react';
import Dropdown from './Dropdown';

const Sections = () => {
  return (
    <>
      <Dropdown/>
      <li className="nav-item">
        <a className="nav-link" href="#">Armá tu PC</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pc's Armadas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Nosotros</a>
      </li> 
    </>
  );
}

export default Sections;
