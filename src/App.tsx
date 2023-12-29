import React from 'react';
import './App.css';
import styled from "styled-components";
import Image from '../src/img/0cbd17e4381497547009ce81acc4eee3.jpeg';
import {Card} from "./components/Card.Styled";
import {ImgBox, ImgBoxElement} from "./components/Img.Styled";
import {Title} from "./components/Title.Styled";
import {Description} from "./components/Description.Styled";
import {Btn1} from "./components/Buttons.Styled";
import {theme} from "./styles/Theme.styled";



function App() {
  return (
    <div className="App">
      <Box>
        <Card>
            <ImgBox> <ImgBoxElement src={Image} alt="" /> </ImgBox>
            <Title margin={theme.margin}> Headline </Title>
            <Description margin={theme.margin}> Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen. </Description>
            <Btn1 btnType={"primary"} color={theme.colors.primary}>See More</Btn1>
            <Btn1 btnType={"outlined"} color={theme.colors.primary}>Save</Btn1>
        </Card>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div `
  height:100vh;
  display:flex;
  justify-content:space-around;
  align-items:center;
  
`







