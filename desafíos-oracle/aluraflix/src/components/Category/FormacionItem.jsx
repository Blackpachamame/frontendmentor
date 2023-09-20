import PropTypes from "prop-types";
import styled from "styled-components";

function FormacionItem({ id, name, color, icon }) {
  return (
    <StyledCategoryItem>
      <StyledCategory>
        <StyledCategoryLink href={"#" + id}>
          <figure
            style={{
              backgroundColor:
                "color-mix(in srgb," + color + "20%, rgba(0, 0, 0, 0.25))",
            }}
          >
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

const StyledCategoryItem = styled.div`
  width: calc(20% - 16px);
  flex: 0 0 211px;
  @media (max-width: 525px) {
    flex: 1 1 160px;
  }
`;

const StyledCategory = styled.div`
  font-family: var(--ff-title);
  padding: 18px;
  background: linear-gradient(#0a1725, #051d3b);
  border-radius: 4px;
  border: solid 2px #051d3b;
  box-shadow: rgba(0, 0, 0, 0.73) 0px 15px 5px -10px;
  transition: all 0.5s;
  &:hover {
    transform: translateY(2px);
    box-shadow: none;
  }
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

FormacionItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
};
