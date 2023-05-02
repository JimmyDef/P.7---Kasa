import Card from "./../card/Card";
import "./rentals.scss";
import { useState, useEffect } from "react";
// import dataJSon from "./../../data/rentals.json";

function Rentals() {
  const [dataRentals, setDataRentals] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
        );
        const data = await response.json();

        setDataRentals(data);
      } catch (err) {
        console.log("error getData");
        return err;
      }
    };
    getData();
  }, []);

  return (
    <section className="rentals">
      {dataRentals.map((rental, idx) => (
        <Card
          dataRentals={dataRentals}
          cover={rental.cover}
          title={rental.title}
          key={`${rental.id}-${idx}`}
          id={rental.id}
        />
      ))}
    </section>
  );
}

export default Rentals;
