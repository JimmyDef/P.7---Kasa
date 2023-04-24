import Card from "./../card/Card";
import "./rentals.scss";
import data from "./../../data/data.js";

function Rentals() {
  return (
    <section className="rentals">
      {data.map((rental) => (
        <Card cover={rental.cover} title={rental.title} key={rental.id} />
      ))}
    </section>
  );
}

export default Rentals;
