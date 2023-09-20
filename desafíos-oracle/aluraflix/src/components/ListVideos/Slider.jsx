import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "react-slick";
import { videos } from "../../assets/data/videos.js";

const SliderComp = ({ formaciones }) => {
  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderProject = videos.map((item, i) => {
    if (item.categoria === formaciones.id) {
      return (
        <div key={i}>
          <StyledFigure className="project" $bgColor={formaciones.color}>
            <img src={item.imgVideo} alt={item.title} />
          </StyledFigure>
        </div>
      );
    }
  });

  return (
    <ContainerSlider>
      <Slider {...settings}>{sliderProject}</Slider>
    </ContainerSlider>
  );
};

export default SliderComp;

const ContainerSlider = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90%;
`;

const StyledFigure = styled.figure`
  --bg-color: ${(props) => props.$bgColor};
  background-color: #090910;
  margin: 0 0.5rem;
  padding: 0.2rem;
  border-radius: 4px;
  border: 2px solid var(--bg-color);
  cursor: pointer;
  position: relative;
  box-shadow: rgba(107, 209, 255, 0.73) 0px 0px 5px 2px;
  overflow: hidden;
  :hover > img {
    transform: scale(1.3);
  }
  img {
    border-radius: 3px;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
`;

SliderComp.propTypes = {
  formaciones: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
  }),
};
