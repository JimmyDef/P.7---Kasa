import "./card.scss";
import { Link } from "react-router-dom";

function card({ title, cover, id }) {
  return (
    <Link to={`/lodging/${id}`}>
      <div className="card">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
export default card;
