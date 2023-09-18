import styled from "styled-components";
import SliderComp from "./Slider";

const Projects = () => {
  return (
    <Container id="project">
      <h3>Recent</h3>
      <Slide>
        <SliderComp />
      </Slide>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 83%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 840px) {
    width: 80%;
  }
  h1 {
    font-size: 1.9rem;
  }

  p {
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const Slide = styled.div``;
