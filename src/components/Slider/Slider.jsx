import React, { useState } from "react";
import styles from "./Slider.module.scss";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <br />
        <br />

        <h1 className="center"> Gifts </h1>

        <br />

        <div className={styles.slider}>
          <FaArrowAltCircleLeft
            className={styles.leftArrow}
            onClick={prevSlide}
          />
          <FaArrowAltCircleRight
            className={styles.rightArrow}
            onClick={nextSlide}
          />

          {SliderData.map((item, index) => {
            return (
              <div
                className={index === current ? styles.active : styles.slide}
                key={index}
              >
                {index === current && (
                  <img src={item.image} className={styles.image} alt="image" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
