import "./collapse.scss";
import chevron from "./../../assets/chevron_down_svg.svg";
import { useState } from "react";

function Collapse({ title, text, collapseState }) {
  const [isOpen, setIsOpen] = useState(collapseState);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__title-box" onClick={handleToggle}>
        <h2>{title}</h2>
        <img
          src={chevron}
          alt="chevron"
          className={isOpen ? "rotate-chevron" : ""}
        />
      </div>
      {isOpen ? <p>{text}</p> : null}
    </div>
  );
}

export default Collapse;
