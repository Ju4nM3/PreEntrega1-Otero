import React from 'react';
import CartWidget from './navbar/CartWidget';
import Sections from './navbar/Sections';


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto container ">
              <div className="row w-100">
                <div className="col-10 d-flex justify-content-center">
                  <Sections/>
                </div>
                <div className="col-2 d-flex justify-content-center">
                  <CartWidget/>
                </div>
              </div>             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
