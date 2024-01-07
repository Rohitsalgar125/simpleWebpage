import React, { useState } from "react";
import "./index.css";

const Index = () => {
  const albums = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? albums.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === albums.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="d-flex justify-content-center carouselDiv">
      <button className="prev" onClick={prevSlide}>
        &lt;
      </button>
      {albums &&
        albums.map((path, index) => {
          return (
            <img
              src={`../../../public/assets/images/${path}.jpg`}
              alt={path}
              width={"50%"}
              height={"50%"}
              key={index}
              className={
                index === currentIndex ? "imageShape active" : "imageShape"
              }
            ></img>
          );
        })}
      <button className="next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Index;
