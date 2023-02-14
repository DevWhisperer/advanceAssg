import styled from "styled-components";

const ModalBackground = styled.div`
  background-color: ${({ modalNum }) => {
    if (modalNum) {
      return "rgba(0, 0, 0, 0.4)";
    }
  }};
  opacity: ${({ modalNum }) => {
    if (modalNum) {
      return 0.5;
    }
  }};

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: ${({ modalNum }) => {
    if (!modalNum) {
      return -1;
    }
  }};
`;

export default ModalBackground;
