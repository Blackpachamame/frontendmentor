import PropTypes from "prop-types";
import styled from "styled-components";
import SliderComp from "./Slider";

const SliderVideos = ({ formaciones, videosUse }) => {
  return (
    <Container className="slider__videos">
      <StyledTitle id={formaciones.id} color={formaciones.color}>
        <img src={formaciones.icon} alt="" />
        <span>{formaciones.name}</span>
      </StyledTitle>
      <SliderComp formaciones={formaciones} videosUse={videosUse} />
    </Container>
  );
};

export default SliderVideos;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px 36px;
  position: relative;
  @media (max-width: 425px) {
    padding: 16px;
  }
`;

const StyledTitle = styled.h2`
  --color-category: ${(props) => props.color};
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    color: var(--color-category);
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
    background: linear-gradient(
      130deg,
      var(--color-category),
      var(--color-black-dark) 90%
    );
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

SliderVideos.propTypes = {
  formaciones: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
  }),
  videosUse: PropTypes.array,
};
