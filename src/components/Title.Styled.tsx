import styled from "styled-components";

type TitleType = {
    margin?: string;
}

export const Title = styled.h1<TitleType> `
  color:#000;
  font-size:16px;
  font-weight:700;
  line-height: normal;
  margin:${props => props.margin}
`