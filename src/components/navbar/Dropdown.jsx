import React from 'react';
import DropdownCategories from './DropdownCategories';

const Dropdown = () => {
  return (
    <>
      <li className="nav-item dropdown position-static">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorías</a>
        <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start mt-0">
          <div className="px-md-4">
            <div className="container-fluid ">
              <div className="row">
                <DropdownCategories firstCategorie="Notebooks" secondCategorie="PC's All in One" thirdCategorie="Motherboards" fourthCategorie="Procesadores"/>
                <DropdownCategories firstCategorie="Memorias Ram" secondCategorie="Almacenamiento" thirdCategorie="Placas de Video" fourthCategorie="Fuentes de Poder"/>
                <DropdownCategories firstCategorie="Gabinetes" secondCategorie="Monitores" thirdCategorie="Periféricos" fourthCategorie="Refrigeración PC"/>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Dropdown;
