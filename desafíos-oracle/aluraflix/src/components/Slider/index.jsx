import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { data } from "../../assets/data/data.js";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 25vw;
  margin: 12px auto;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  & ul li {
    display: inline-flex;
  }
`;

const StyledImg = styled.img`
  width: 90%;
  height: 300px;
  border-radius: 20px;
  border: 1px solid #eee;
  overflow: hidden;
`;

export default function Slider() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

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
      <ImgContainer>
        <div className="leftArrow" onClick={() => scrollToImage("prev")}>
          &#10092;
        </div>
        <div className="rightArrow" onClick={() => scrollToImage("next")}>
          &#10093;
        </div>
        <ul ref={listRef}>
          {data.map((item) => {
            return (
              <li key={item.id}>
                <StyledImg src={item.imgUrl} />
              </li>
            );
          })}
        </ul>
      </ImgContainer>
    </SliderContainer>
  );
}
