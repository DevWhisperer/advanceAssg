import styled from "styled-components";

const SelectStyle2 = styled.div`
  width: 100px;
  height: 100px;
  position: ${({ isOverflow }) => {
    return isOverflow ? "absolute" : "relative";
  }};
  left: ${({ isOverflow }) => {
    return isOverflow ? "200px" : "10px";
  }};
`;

export default SelectStyle2;
