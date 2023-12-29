import styled, {css} from "styled-components";

type Btn1PropsType = {
    color?: string;
    border?:string;
    btnType: "primary" | "outlined";
}

export const Btn1 = styled.button<Btn1PropsType> `
  border-radius: 5px;
  font-size: 10px;
  width: 86px;
  height: 30px;
  margin-left: 20px;
  font-family: 'Inter', sans-serif;


  ${props => props.btnType === "primary" && css<Btn1PropsType>`
    background-color: ${props => props.color || "black"};
    color: white;
    border:none;
  `}


  ${props => props.btnType === "outlined" && css<Btn1PropsType>`
    border: 2px solid ${props => props.color || "black"};
    color: ${props => props.color || "black"};
    background-color: transparent;
    
    &:hover {
      background-color: ${props => props.color || "black"};
      color:white;
    }
  `}

  


`

