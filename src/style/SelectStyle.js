import styled from "styled-components";

const SelectStyle = styled.div`
  height: 100px;
  margin-top: 10px;
  margin-left: 30px;

  position: ${({ notHidden }) => {
    return notHidden ? "absolute" : "";
  }};

  left: ${({ notHidden }) => {
    return notHidden ? "200px" : "1000px";
  }};
`;

export default SelectStyle;
