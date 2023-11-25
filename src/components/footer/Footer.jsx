import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Hotels</li>
          <li className="fListItem">Vuelos</li>
          <li className="fListItem">Taxis</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Apartamentos </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Estancias </li>
          <li className="fListItem">Vuelos</li>
          <li className="fListItem">Articulos </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Renta un carro </li>
          <li className="fListItem">Taxis</li>
          <li className="fListItem">Restaurantes </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Ayuda</li>
          <li className="fListItem">Informacion</li>
          <li className="fListItem">Precios</li>
        </ul>
      </div>
      <div className="fText">
        Copyright © 2023{" "}
        <a href="https://marco-andrey-ui-ux.netlify.app/">Marco Andrey</a>
      </div>
    </div>
  );
};

export default Footer;
