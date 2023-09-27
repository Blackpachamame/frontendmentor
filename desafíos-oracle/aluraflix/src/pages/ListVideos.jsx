import PropTypes from "prop-types";
import styled from "styled-components";

export default function ListVideos({ videosUse }) {
  return (
    <StyledMain>
      <h1>Lista de Videos</h1>
      <ul>
        {videosUse.map((video) => (
          <li key={video.id}>
            <h6>{video.title}</h6>
          </li>
        ))}
      </ul>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h1 {
    margin-bottom: 10px;
    text-align: center;
  }
  @media (max-width: 425px) {
    padding: 16px;
  }
  @media (max-width: 375px) {
    padding: 16px 0;
  }
`;

ListVideos.propTypes = {
  videosUse: PropTypes.array,
};
