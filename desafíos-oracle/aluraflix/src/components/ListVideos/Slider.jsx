import styled from "styled-components";
import Slider from "react-slick";
import Project from "./Project";

const SliderComp = () => {
  let data = [
    {
      img: "../src/assets/images/front1.webp",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "../src/assets/images/front2.jpg",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "../src/assets/images/front3.jpg",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "../src/assets/images/front4.jpg",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "../src/assets/images/front5.jpg",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
    {
      img: "../src/assets/images/front6.jpg",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
    },
  ];

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
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);

  return (
    <ContainerSlider>
      <Slider {...settings}>{sliderProject}</Slider>
    </ContainerSlider>
  );
};

export default SliderComp;

const ContainerSlider = styled.div`
  position: relative;
`;
