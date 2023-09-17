import styled from "styled-components";

const StyledCategoryItem = styled.div`
  width: calc(20% - 16px);
  flex: 0 0 211px;
  @media (max-width: 525px) {
    flex: 1 1 160px;
  }
`;

const StyledCategory = styled.div`
  font-family: var(--ff-title);
  padding: 20px;
  background-color: #051d3b;
  border-radius: 0.5em;
  border: solid 0.03em #0d4d9c;
  box-shadow: 0.31em 0.37em 0.87em 0.87em rgba(0, 0, 0, 0.04);
`;

const StyledCategoryLink = styled.a`
  color: var(--color-gray-light);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  text-transform: uppercase;
  & figure {
    width: 40px;
    height: 40px;
    border-radius: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledLogo = styled.img`
  width: 30px;
  height: 30px;
`;

const StyledNameCategory = styled.h3`
  font-size: 15px;
  margin-top: 10px;
`;

// eslint-disable-next-line react/prop-types
function FormacionItem({ name, color, icon }) {
  return (
    <StyledCategoryItem>
      <StyledCategory>
        <StyledCategoryLink href="#">
          <figure style={{ backgroundColor: color + "52" }}>
            <StyledLogo src={icon} alt={name} />
          </figure>
          <StyledNameCategory style={{ color: color }}>
            {name}
          </StyledNameCategory>
        </StyledCategoryLink>
      </StyledCategory>
    </StyledCategoryItem>
  );
}

export default FormacionItem;
