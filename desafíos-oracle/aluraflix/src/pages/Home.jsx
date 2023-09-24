import styled from "styled-components";
import SliderTop from "../components/SliderTop";
import Category from "../components/Category";
import ListVideos from "../components/ListVideos";
import { formaciones } from "../assets/data/formaciones";

export default function Home() {
  return (
    <StyledMain>
      <SliderTop />
      <Category />
      {formaciones.map((item, i) => (
        <ListVideos key={i} formaciones={item} />
      ))}
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding-bottom: 16px;
`;
