import styled from "styled-components";
import SliderComp from "./Slider";

const Projects = () => {
  return (
    <Container className="sliderVideos">
      <StyledTitle id="frontend">
        <img src="../src/assets/images/icono/iconFrontend.svg" alt="" />
        <span>Frontend</span>
      </StyledTitle>
      <SliderComp />
    </Container>
  );
};

export default Projects;

const Container = styled.section`
  /* max-width: 1280px; */
  display: flex;
  flex-direction: column;
  padding: 0 36px 16px;
  position: relative;
  @media (max-width: 425px) {
    padding: 16px;
  }
`;

const StyledTitle = styled.h2`
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    color: var(--color-frontend);
    position: relative;
  }
  span:before {
    content: "";
    position: absolute;
    bottom: -2px;
    width: 100%;
    left: 0;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(130deg, #6bd1ff, #090910 90%);
  }
  img {
    width: 30px;
  }
  @media (max-width: 990px) {
    margin-bottom: 0;
    span {
      width: 100%;
    }
    img {
      width: 24px;
    }
  }
`;
