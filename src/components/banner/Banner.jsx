import "./banner.scss";
import PropTypes from "prop-types";
function Banner({ img, text, size }) {
  return (
    <div className={`banner ${img} ${size}`}>
      <h1>{text}</h1>
    </div>
  );
}

Banner.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
};
Banner.defaultProps = {
  text: "",
};

export default Banner;
