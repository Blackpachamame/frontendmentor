import styled from "styled-components";
// import { data } from "../../assets/data/data.js";

const CategoryContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 25vw;
  margin: 12px auto;
`;

const StyledCategory = styled.div`
  width: 100%;
`;

export default function Category() {
  return (
    <CategoryContainer>
      <StyledCategory></StyledCategory>
    </CategoryContainer>
  );
}
