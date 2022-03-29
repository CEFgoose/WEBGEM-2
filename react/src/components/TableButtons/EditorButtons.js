
import React from "react";
import styled from "styled-components";

export const Button = styled.button`
box-sizing: inherit;
font-family: sans-serif;
font-size: 100%;
line-height: 1.15;
min-width: 5vw;
height: min-content;
width:min-content;


border-radius: 6px;
margin:auto;
margin-top: .5em;
margin-bottom: 1em;
margin-left:.5%;
margin-right:.5%;
background-color: #f4753c;
color: white;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${(props) => (props.disabled ? "gray" : "#c85823")};
    color: black;
    background-color:  #ffff;
    border: 2px solid #f4753c;
  }
`;


  export const EditorButtons= (props) => {
 

    const Clear= () => {
        console.log("clear")
        props.action(null,"Clear")
    }

    const Add=()=>{
        props.action2('add')
    }

 
        
    if (props.bool){
      return (
        <>
          <Button onClick={props.action3}>Edit</Button>
          <Button onClick={Add}>Add</Button>
          <Button onClick={Clear}>Clear</Button>
        </>
      );
    }else{
        return (
        <>
          <Button onClick={props.action3}>Edit</Button>
          <Button onClick={()=>props.action2('update')}>Update</Button>
          <Button onClick={Clear}>Clear</Button>
        </>
        );
      
        }     



    }




