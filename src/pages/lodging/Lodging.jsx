// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import Collapse from "../../components/collapse/Collapse";
import { data } from "./../../data/data.js";
import NotFound from "../404/NotFound.jsx";
import Carrousel from "../../components/carrousel/Carrousel";

function Lodging() {
  const { id } = useParams();

  const lodging = data.find((elt) => elt.id === id);

  if (!lodging) {
    return <NotFound />;
  }
  return (
    <section>
      <Carrousel pictures={lodging.pictures} title={lodging.title} />
      <h2>TEST</h2>
      <Collapse />
    </section>
  );
}

export default Lodging;
