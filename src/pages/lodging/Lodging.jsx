import { useParams } from "react-router-dom";
import Collapse from "../../components/collapse/Collapse";
import { data } from "./../../data/data.js";
import NotFound from "../404/NotFound.jsx";
import Carrousel from "../../components/carrousel/Carrousel";
import "./lodging.scss";

function Lodging() {
  const { id } = useParams();

  const lodging = data.find((elt) => elt.id === id);
  const rating = parseInt(lodging.rating);
  const starsArray = [1, 2, 3, 4, 5];

  if (!lodging) {
    return <NotFound />;
  }

  const [forename, name] = lodging.host.name.split(" ");
  return (
    <section>
      <Carrousel pictures={lodging.pictures} title={lodging.title} />

      <div className="lodging-info">
        <h2>{lodging.title}</h2>
        <p>{lodging.location}</p>

        <div className="lodging-info__tags-box">
          {lodging.tags.map((tag, idx) => (
            <div key={`${tag}-${idx}`} className="lodging-info__tag">
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lodging-profil">
        <div className="lodging-profil__stars">
          {starsArray.map((elt, idx) =>
            elt <= rating ? (
              <span key={"star" + idx} className="lodging-profil__star">
                ★
              </span>
            ) : (
              <span key={"star" + idx} className="lodging-profil__star grey">
                ★
              </span>
            )
          )}
        </div>
        <div className="lodging-profil__host">
          <div className="lodging-profil__name">
            <p>{forename}</p>
            <p>{name}</p>
          </div>
          <div className="lodging-profil__picture">
            <img src={lodging.host.picture} alt={lodging.host.name} />
          </div>
        </div>
      </div>
      <div className="lodging-collapse-container">
        <Collapse
          title={lodging.title}
          text={lodging.description}
          collapseState={false}
        />
        <Collapse
          title={lodging.title}
          text={lodging.equipments}
          collapseState={true}
        />
      </div>
    </section>
  );
}

export default Lodging;
