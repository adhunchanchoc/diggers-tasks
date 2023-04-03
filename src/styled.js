import styled from "styled-components";

export const TabSelector = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TabButton = styled.button`
  flex-grow: 1;
  /* border-top: 3px; */
  font-size: 24px;
  cursor: pointer;
  ${(props) => {
    if (props.name === props.act) {
      return "background-color:antiquewhite;border-bottom:0px;font-weight: bold;";
    } else {
      return "";
    }
  }}
`;

export const List = styled.div`
  /* border: 1px black solid; */
  margin: 20px;
`;
export const Item = styled.li`
  list-style-type: none;
  border: 1px black solid;
  font-size: 1.2rem;
  height: 2rem;
`;
export const DeleteButton = styled.span`
  position: relative;
  left: 1rem;
  color: red;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    font-weight: bolder;
  }
`;
