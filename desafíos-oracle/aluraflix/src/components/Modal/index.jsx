import PropTypes from "prop-types";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

export default function Modal({ open, onClose, url }) {
  if (!open) return null;
  return (
    <ContainerModal onClick={onClose}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <ReactPlayer
          className="video__play"
          url={url}
          width="100%"
          height="100%"
          playing={true}
          controls={true}
        />
      </div>
    </ContainerModal>
  );
}

const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  .modalContainer {
    max-width: 640px;
    width: 100%;
    height: 360px;
    box-shadow: var(--color-secondary) 0px 0px 10px 5px;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
  }
  @media (max-width: 730px) {
    .modalContainer {
      max-width: 480px;
      width: 100%;
      height: 270px;
    }
  }
  @media (max-width: 530px) {
    .modalContainer {
      max-width: 360px;
      width: 100%;
      height: 203px;
    }
  }
`;

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  url: PropTypes.string,
};
