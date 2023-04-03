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
export const InputRow = styled(Item)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
`;
export const InputField = styled.input`
  background-color: white;
  max-width: 9rem;
  font-size: 1.2rem;
  padding: 2px;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  ${(props) => {
    if (props.type == "number") {
      return "max-width:3rem";
    }
  }}
`;
