import "./App.css";
import ImageSlider from "./components/4-image-slider";
// import Accord from "./components/practice";
// import Accordion from "./components/1-accordion";
// import RandomColor from "./components/2-random-color";
// import StarRating from "./components/3-star-rating";

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star Rating component */}
      {/* <StarRating noOfStars={8} /> */}

      {/* Image Slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />

      {/* practice */}
      {/* <Accord /> */}
    </div>
  );
}

export default App;
