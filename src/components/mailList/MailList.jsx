import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">
        ¡Suscríbete y recibe nuestras mejores ofertas!
      </h1>
      <div className="mailInputContainer">
        <input type="text" placeholder="Escribe tu correo electronico" />
        <button>Enviar</button>
      </div>
    </div>
  );
};

export default MailList;
