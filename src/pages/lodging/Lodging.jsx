// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import Collapse from "../../components/collapse/Collapse";
import { data } from "./../../data/data.js";
import NotFound from "../404/NotFound.jsx";
console.log("🚀 ~ data:", data);

function Lodging() {
  const { id } = useParams();
  console.log("🚀 ~ Lodging ~ id:", id);

  const lodgingId = data.find((elt) => elt.id === id);

  if (!lodgingId) {
    return <NotFound />;
  }
  return (
    <section>
      <h1>TEST</h1>
      <Collapse />
    </section>
  );
}

export default Lodging;
