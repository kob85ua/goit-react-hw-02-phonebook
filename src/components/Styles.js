
import styled from 'styled-components';

const AppWrapper = styled.div`
  font-family: 'Arial';
  font-size: 16px;
  width: 350px;
  margin: auto;
  padding-inline-start: 0;
  border: 2px grey solid;
  border-radius: 20px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const InputBlockWrapper = styled.form`
  width: 250px;
   display:flex;
  height: 120px;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`
const Label = styled.label`
 display:flex;
 justify-content: space-between;
 align-items: center;
 
`
const Input = styled.input`
 border: 2px grey solid;
 height: 30px;
  border-radius: 20px;
`
const Button = styled.button`
  width: 100px;
  align-self:center;
  height: 30px;
  border: 2px grey solid;
  border-radius: 15px;
  

`
const List = styled.li`
 list-style-type: none;
`
const ListItem = styled.li`
width: 80%;
display: flex;
flex-direction: space-between;
justify-content: center;
height:50px;
`
export {
    AppWrapper,
    InputBlockWrapper,
    Label, 
    Input, 
    Button, 
    List,
    ListItem

  };