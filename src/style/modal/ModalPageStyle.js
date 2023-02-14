import styled from "styled-components";

const ModalPageStyle = styled.div`
  position: fixed;
  display: block;
  z-index: 200;
  top: 20%;
  left: 30%;
  width: 40%;
  background: white;
  padding: 1rem;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  display: ${({ modalNum }) => {
    return Number(modalNum) === 0 ? "none" : "";
  }};
`;

export default ModalPageStyle;
