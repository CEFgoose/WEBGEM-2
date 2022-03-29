import React from "react";
import styled from "styled-components";
import { SketchPicker, } from 'react-color';
export const Button = styled.button`
box-sizing: inherit;
font-family: sans-serif;
font-size: 100%;
line-height: 1.15;
min-width: 5vw;



border-radius: 6px;
margin:auto;
margin-top: .5em;
margin-bottom: 1em;
margin-left:1.2%;
margin-right:1%;
background-color: #f4753c;

color: white;
border: none;
cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
// &:hover {
//   background-color: ${(props) => (props.disabled ? "gray" : "#c85823")};
//   color: black;
//   background-color:  #ffff;
//   border: 2px solid #f4753c;
// }
`;



export const UnUpNodeSizeWrapper = styled.div`
border-TOP: 2px solid #f4753c;
display: flex;
padding: 1%;
align-items: center;
flex-direction: row;
justify-content: space-around;
`;

export const UnUpNodeSizeSpin =(props)=>{
 const add = () => {
    props.action("","+UnUpNodeSize");
}
 const  subtract= () => {
    props.action("","-UnUpNodeSize");
}

const changeColor = (color) => {
    props.action(color.hex,"UnUpNodeColor")
  }
  
  
  const toggleShowPicker = ()=>{
      console.log('prop',props.showMenu)
    if (props.showMenu){
        console.log('true')
      props.action(false,"ShowUnUpNodeColorMenu")
  }else{
    console.log('false')
      props.action(true,"ShowUnUpNodeColorMenu")
  }
  }

  if (props.showMenu!==true){
        return (
            <>
              <div style={{display: 'flex', flexDirection: 'row'}} >
              <h4 style={{marginTop:'14px',marginBottom:'5px'}}> Node Size:</h4>
              <input style={{height: '28px',maxWidth: '7%', textAlign:'center', justifyContent:'center', padding:'0%;',marginTop:'11px',marginLeft:'2%'}}
                     type="numeric"
                     value={props.num}
                    />
                    <Button onClick={subtract} style={{marginTop:"12px",marginBottom:"15px"}}>-</Button>
                    <Button onClick={add} style={{marginTop:"12px",marginBottom:"15px"}}>+</Button>
                    <span style={{width:'5%'}}></span>
                    <h4 style={{marginTop:"12px",marginBottom:"15px"}}> Node Color:</h4>
                    <span style={{width:'1%'}}></span>
                    <img className="NodeIcons" src={null} style={{backgroundColor:props.color,width:'10px;', height:"20px",marginLeft:"2%;",marginTop:"14px",marginBottom:"15px"}} alt=""/>
                    <Button style={{marginLeft:"2%;",marginTop:"12px",marginBottom:"15px"}} onClick={()=>toggleShowPicker()}>Select</Button>
                </div>

            </>
        );
  }else{
      return(
        <>
        <div >
        <SketchPicker color={props.color}onChange={ changeColor }/>
        </div>

        <div style={{display: 'flex', flexDirection: 'row'}} >
        <h4 style={{marginTop:'14px',marginBottom:'5px'}}> Node Size:</h4>
        <input
                  style={{height: '28px',maxWidth: '7%', textAlign:'center', justifyContent:'center', padding:'0%;',marginTop:'11px',marginLeft:'2%'}}
              type="numeric"
              value={props.num}
              />

            <Button onClick={subtract} style={{marginTop:"12px",marginBottom:"15px"}}>-</Button>
            <Button onClick={add} style={{marginTop:"12px",marginBottom:"15px"}}>+</Button>
            <span style={{width:'5%'}}></span>
            <h4 style={{marginTop:"12px",marginBottom:"15px"}}> Node Color:</h4>
            <span style={{width:'1%'}}></span>
            <img className="NodeIcons" src={null} style={{backgroundColor:props.color,width:'10px;', height:"20px",marginLeft:"2%;",marginTop:"14px",marginBottom:"15px"}} alt=""/>




            <Button style={{marginLeft:"2%;",marginTop:"12px",marginBottom:"15px"}}onClick={()=>toggleShowPicker()}>close</Button>
              

          </div>

      </>




      )
  }
}

// if (props.showMenu){
//     return (
//       <>
//       <UnUpNodeColorWrapper>
//       <label> Node Color:</label>
//         <SketchPicker color={props.color}onChange={ changeColor }/>
//         <Button onClick={toggleShowPicker}>Close</Button>
//         </UnUpNodeColorWrapper>
//       </>
//     )}else{
//       return (
//         <>
//       <UnUpNodeColorWrapper>
//         <label> Node Color:</label>
//         <img className="NodeIcons" src={null} style={{backgroundColor:props.color}} alt=""/>
//         <Button onClick={toggleShowPicker}>Open</Button>
//         </UnUpNodeColorWrapper>
//          </>