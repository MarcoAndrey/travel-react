import "./navbar.css"
import logo from '../../assets/img/logo.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <img className="logo" src={logo} alt="logo" />
        <div className="navItems">
          <button className="navButton">Regístrate</button>
          <button className="navButton">Inicia sesión</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar