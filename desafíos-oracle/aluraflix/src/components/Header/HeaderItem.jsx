import styled from "styled-components";

const StyledHeaderItem = styled.li`
  font-family: var(--ff-title);
  font-weight: 600;
  font-size: 15px;
  color: white;
  list-style: none;
  padding-block: 10px;
  cursor: pointer;
`;

const StyledLink = styled.a`
  color: var(--color-gray-light);
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
`;

const StyledParagraph = styled.p`
  font-size: 15px;
  margin-left: 0.5rem;
  position: relative;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    margin: auto;
    width: 0%;
    height: 2px;
    color: transparent;
    background: var(--color-gray-light);
    border-radius: 0px 0px 4px 4px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  &:hover:after {
    width: 100%;
  }
`;

// eslint-disable-next-line react/prop-types
function HeaderItem({ name, Icon, fontSize }) {
  return (
    <StyledHeaderItem>
      <StyledLink href="#">
        <Icon style={{ fontSize: fontSize }} />
        <StyledParagraph>{name}</StyledParagraph>
      </StyledLink>
    </StyledHeaderItem>
  );
}

export default HeaderItem;
