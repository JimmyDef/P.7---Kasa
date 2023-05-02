import { useParams } from "react-router-dom";
import Collapse from "../../components/collapse/Collapse";
// import dataJSon from "./../../data/rentals.json";
import NotFound from "../404/NotFound.jsx";
import Carrousel from "../../components/carrousel/Carrousel";
import "./lodging.scss";
import redStar from "./../../assets/start-red.png";
import greyStar from "./../../assets/star_grey.png";
import { useState, useEffect } from "react";

function Lodging() {
  const { id } = useParams();

  const [dataLodging, setDataLodging] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
        );
        const data = await response.json();
        setDataLodging(data);
      } catch (err) {
        console.log("error getData lodging");
        return err;
      }
    };
    getData();
  }, []);

  const lodging = dataLodging.find((elt) => elt.id === id);

  if (!lodging && !dataLodging) {
    return <NotFound />;
  }

  const rating = parseInt(lodging.rating);

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
          {[...Array(5)].map((elt, idx) => {
            const ratingArrayValue = idx + 1;

            return ratingArrayValue <= rating ? (
              <img src={redStar} key={"star" + idx} alt="étoile rouge" />
            ) : (
              <img src={greyStar} key={"star" + idx} alt="étoile grise" />
            );
          })}
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
