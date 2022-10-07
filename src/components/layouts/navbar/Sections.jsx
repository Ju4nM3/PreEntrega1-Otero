import {Link} from 'react-router-dom'
import Dropdown from './Dropdown';

const Sections = () => {
  return (
    <>
      <li className="nav-item d-flex align-items-center mx-2">
        <Link className="nav-link" to="/"><i className="fa-solid fa-house h3"></i></Link>
      </li>
      <li className="nav-item d-flex align-items-center mx-2">
        <Dropdown/>
      </li>
      <li className="nav-item d-flex align-items-center mx-2">
        <Link className="nav-link" to="/about">Nosotros</Link>
      </li>
      <li className="nav-item d-flex align-items-center mx-2">
        <Link className="nav-link" to="contact">Contacto</Link>
      </li> 
    </>
  );
}

export default Sections;
