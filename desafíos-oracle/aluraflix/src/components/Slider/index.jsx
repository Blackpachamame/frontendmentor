import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { data } from "../../assets/data/data.js";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 25vw;
  margin: 12px auto;
`;

const StyledSlider = styled.div`
  width: 100%;
  display: flex;
  overflow-x: hidden;
  padding: 4px 60px;
`;

const ImgContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const StyledImg = styled.img`
  min-width: 100%;
  height: 310px;
  border-radius: 20px;
  object-fit: cover;
`;

export default function Slider() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("div > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    const sliderLength = data.length - 1;
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlider = currentIndex === 0;
        return isFirstSlider ? sliderLength : curr - 1;
      });
    } else {
      setCurrentIndex((curr) => {
        const isLastSlider = currentIndex === sliderLength;
        return !isLastSlider ? curr + 1 : 0;
      });
    }
  };

  return (
    <SliderContainer>
      <StyledSlider>
        <div className="leftArrow" onClick={() => scrollToImage("prev")}>
          &#10092;
        </div>
        <div className="rightArrow" onClick={() => scrollToImage("next")}>
          &#10093;
        </div>
        <ImgContainer ref={listRef}>
          {data.map((item) => {
            return <StyledImg src={item.imgUrl} key={item.id} />;
          })}
        </ImgContainer>
      </StyledSlider>
    </SliderContainer>
  );
}
