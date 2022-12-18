// El nombre de este archivo es una convención. Se suele incluir .styled, para distinguirlo como un styled component. Se
import styled from "styled-components";

export const Sform = styled.form`
  width: 600px;
  margin: 0 auto;
`
export const Sinput = styled.input`

  width: 90%;
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  /* background: papayawhip; */
  border: none;
  border-radius: 3px;
  background: ${props => props.button ? "palevioletred" : "papayawhip"};
  color: ${props => props.button ? "papayawhip" : "palevioletred"};
`;


export const Sbutton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color:palevioletred;
`