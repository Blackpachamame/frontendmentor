import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";
import List from "../List";

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw 25px;
  @media (max-width: 500px) {
    padding: 0px 20px;
  }
  @media (max-width: 375px) {
    padding: 0px 10px;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 25px;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const Container = () => {
  return (
    <StyledContainer>
      <Title>Smart Bank</Title>
      <Content>
        <Account />
        <List />
      </Content>
    </StyledContainer>
  );
};

export default Container;
