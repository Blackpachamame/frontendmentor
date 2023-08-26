import styled from "styled-components";

export const Icono = styled.img`
  height: 25px;
  width: 25px;
`;

export const IconoTema = styled(Icono)`
  filter: ${({ theme }) => theme.filter};
`;

export const Btn = styled.button`
  height: 41px;
  margin: 15px auto 0px auto;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.header};
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.inside};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 100%;
`;

export const Saldo = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const Detalle = styled.span`
  color: ${({ theme }) => theme.header};
  font-size: 24px;
`;

export const BtnTema = styled.div`
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const ContainerBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 500px) {
    gap: 10px;
  }
`;
