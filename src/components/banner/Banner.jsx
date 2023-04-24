import "./banner.scss";
function Banner({ img, text, size }) {
  return (
    <div className={`banner ${img} ${size}`}>
      <h1>{text}</h1>
    </div>
  );
}

export default Banner;
