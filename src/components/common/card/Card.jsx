import { Link } from "react-router-dom";
import "./Card.css"; // Archivo CSS para personalización

export const Card = ({ title, price, stock, image, id }) => {
  return (
    <div className="card product-card">
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-price">Precio: ${price}</p>
        <p className="card-text text-muted">Stock: {stock}</p>
        <Link to={`/itemDetail/${id}`}>
          <button className="btn urban-button">Ver detalle</button>
        </Link>
      </div>
    </div>
  );
};


