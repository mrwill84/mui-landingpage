import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// desktop, tabs, mobile- 3 items, 2 items, 1 items
// must refactor later
const responsiveMain = {
  desktop: {
    breakpoint: { max: 1920, min: 1191 },
    items: 3,
  },
  tabs: {
    breakpoint: { max: 1190, min: 601 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
const responsiveDense = {
  desktop: {
    breakpoint: { max: 1920, min: 1191 },
    items: 4,
  },
  tabs: {
    breakpoint: { max: 1190, min: 601 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};
const responsiveMbl = {
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

export const CarousalItem = ({ children }) => {
  // const [dense,setDense] =  useState(false)
  // const responsive = dense ? responsiveDense : responsiveMain
  // console.log(dense)
  return (
    <Carousel
      responsive={responsiveMain}
      containerClass="carousel-container"
      itemClass="carousel-item"
      swipeable={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
      transitionDuration={1500}
    >
      {children}
    </Carousel>
  );
};
export const CarousalItemDense = ({ children }) => {
  return (
    <Carousel
      responsive={responsiveDense}
      containerClass="carousel-container"
      itemClass="carousel-item"
      swipeable={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
      transitionDuration={1500}
    >
      {children}
    </Carousel>
  );
};
export const CarousalItemOnlyMobile = ({ children }) => {
  return (
    <Carousel
      responsive={responsiveMbl}
      containerClass="carousel-container"
      itemClass="carousel-item"
      swipeable={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
      transitionDuration={2500}
    >
      {children}
    </Carousel>
  );
};
