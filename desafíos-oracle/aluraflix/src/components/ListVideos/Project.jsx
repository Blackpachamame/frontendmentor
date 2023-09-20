import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Project = ({ imagen, color }) => {
  return (
    <StyledFigure className="project" $bgc={color}>
      <img src={imagen} alt="project" />
    </StyledFigure>
  );
};

export default Project;

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
