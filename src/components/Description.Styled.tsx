import styled from "styled-components";

type DescriptionType = {
    margin: string;
}


export const Description = styled.p<DescriptionType> `
  color: #ABB3BA;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  margin:${props => props.margin}
`