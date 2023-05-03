import "./home.scss";
import { useFetch } from "./../../utils/useFetch";
import Banner from "./../../components/banner/Banner";
import Loader from "./../../components/loader/Loader";
import Card from "./../../components/card/Card";

function Home() {
  const accomodations = useFetch(window.location.origin + "/data.json");
  //  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";

  return (
    <>
      <Banner img={"img-cliff"} text={"Chez vous, partout et ailleurs"} />

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

export default Home;
