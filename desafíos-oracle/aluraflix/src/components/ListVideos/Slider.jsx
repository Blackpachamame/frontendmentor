import styled from "styled-components";
import Slider from "react-slick";
import { videos } from "../../assets/data/videos.js";
import { formaciones } from "../../assets/data/formaciones.js";

const SliderComp = () => {
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
    ],
  };

  const sliderProject = videos.map((item, i) => {
    const categoria = item.categoria;
    const buscarColor = formaciones.filter(
      (formacion) => formacion.id === categoria
    );
    const color = buscarColor[0].color;
    return (
      <div key={i}>
        <StyledFigure className="project" $bgc={color}>
          <img src={item.imgVideo} alt={item.title} />
        </StyledFigure>
      </div>
    );
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
  background-color: ${(props) => props.$bgc};
  margin: 0 0.5rem;
  padding: 0.3rem;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  :hover > img {
    transform: scale(1.3);
  }
  img {
    border-radius: 2px;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  @media (max-width: 375px) {
    padding: 0.2rem;
  }
`;
