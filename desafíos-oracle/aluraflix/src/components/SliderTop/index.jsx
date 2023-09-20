// import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { banners } from "../../assets/data/banners.js";

const SliderContainer = styled.section`
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 32px;
`;

const StyledImg = styled.img`
  max-height: 320px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

export default function SliderTop() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <SliderContainer className="sliderTop">
      <Slider {...settings}>
        {banners.map((item) => {
          return <StyledImg src={item.imgUrl} key={item.id} />;
        })}
      </Slider>
    </SliderContainer>
  );
}
