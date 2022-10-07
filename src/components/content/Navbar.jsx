import Form from "../layouts/Form";
import Brand from "../layouts/Brand"
import CartWidget from "../layouts/navbar/CartWidget";
import Sections from "../layouts/navbar/Sections";


const Navbar = () => {
  return (
    <>
      <Brand/>
      <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
        <div className="container-fluid ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse container-fluid" id="navbarColor03">
            <ul className="navbar-nav me-auto container-fluid w-100">
              <div className="row w-100">
                <div className="col-10 d-flex justify-content-center">
                  <Sections />
                </div>
                <div className="col-2 d-flex justify-content-center">
                </div>
              </div>
            </ul>
            <ul className="navbar-nav me-auto container-fluid w-25">
              <li className="nav-item d-flex align-items-center"><CartWidget /></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
