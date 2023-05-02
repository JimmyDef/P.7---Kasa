import Card from "./../card/Card";
import "./rentals.scss";
import Loader from "./../loader/Loader";
// import { useEffect, useState } from "react";
import useFetch from "./../../utils/useFetch";

function Rentals() {
  const accomodations = useFetch(window.location.origin + "/data.json");
  console.log("🚀 ~ Rentals ~ useFetch:", useFetch);

  console.log("🚀 ~ Rentals ~ accomodations:", accomodations);

  console.log("🚀 ~ Rentals ~ accomodations:", accomodations);

  if (accomodations.error) return <h1>ERROOOOR</h1>;

  return (
    <>
      {accomodations.isLoading ? (
        <Loader />
      ) : (
        <section className="rentals">
          {accomodations.fetchedData.map((rental, idx) => (
            <Card
              cover={rental.cover}
              title={rental.title}
              key={`${rental.id}-${idx}`}
              id={rental.id}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Rentals;
