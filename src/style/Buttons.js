import styled from "styled-components";

const Buttons = styled.button`
  color: ${({ color }) => color};
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
`;
export default Buttons;
