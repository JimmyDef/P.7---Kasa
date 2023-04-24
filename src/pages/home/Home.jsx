import "./home.scss";

import Banner from "./../../components/banner/Banner";
import Rentals from "./../../components/rentals/Rentals";

function Home() {
  return (
    <>
      <Banner img={"img-cliff"} text={"Chez vous, partout et ailleurs"} />
      <Rentals />
    </>
  );
}

export default Home;
