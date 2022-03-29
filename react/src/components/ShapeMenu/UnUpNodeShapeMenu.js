import React from 'react';
import styled from "styled-components";

export const Button = styled.button`
  box-sizing: inherit;
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  min-width: 5vw;
  max-width: 10vw;

  overflow: visible;
  text-transform: none;
  border-radius: 6px;
  margin-top: .7em;
  margin-bottom: 1em;
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

export const UnUpNodeShapeIconWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50% 50%;
  max-width: 25vh;
`;

export const UnUpNodeShapeWrapper = styled.div`
  border-TOP: 2px solid #f4753c;
  display: flex;
  padding: 3%;
  flex-direction: column;
`;

export const UnUpNodeShapeMenu =(props)=> {


const changeShape = (e) => {
  props.action(e,"UnUpNodeShape")

}

const CloseMenu= ()=>{
  props.action(false,"ShowUnUpShapeMenu")
}

const toggleShowMenu = ()=>{ 
  if (props.ShowMenu){
     props.action(false,"ShowUnUpShapeMenu")
  }else{
     props.action(true,"ShowUnUpShapeMenu")
  }
}

    if (props.ShowMenu){
    return (
      <>
      <Button style={{float:'right',margin:"0 0"}}onClick={toggleShowMenu}>Close</Button>
      <h4 className="file-functions"> Node Shape:</h4>
      <div style={{display: 'flex', flexDirection: 'row', marginLeft:'25%',marginRight:'0',marginTop:"0"}} >
        <button style={{color:'black',width:'20%'}}onClick={()=>changeShape('/icons/circle.png')}><img className="NodeIcons" src={'/icons/circle.png'} style={{'background-color':props.color}} alt=""/>Circle</button>
        <button style={{color:'black',width:'20%'}}onClick={()=>changeShape('/icons/triangle.png')}><img className="NodeIcons" src={'/icons/triangle.png'} style={{'background-color':props.color}} alt=""/>Triangle</button>
        <button style={{color:'black',width:'20%'}}onClick={()=>changeShape('/icons/square.png')}><img className="NodeIcons" src={'/icons/square.png'} style={{'background-color':props.color}} alt=""/>Square</button>
      </div>
      <div style={{display: 'flex', flexDirection: 'row',marginLeft:'25%'}} >
        <button style={{'color':'black',width:'20%'}}onClick={()=>changeShape('/icons/pentagon.png')}><img className="NodeIcons" src={'/icons/pentagon.png'} style={{'background-color':props.color}} alt=""/>Pentagon</button>
        <button style={{'color':'black',width:'20%'}}onClick={()=>changeShape('/icons/hexagon.png')}><img className="NodeIcons" src={'/icons/hexagon.png'} style={{'background-color':props.color}} alt=""/>Hexagon</button>
        <button style={{'color':'black',width:'20%'}}onClick={()=>changeShape('/icons/heptagon.png')}><img className="NodeIcons" src={'/icons/heptagon.png'} style={{'background-color':props.color}} alt=""/>Heptagon</button>
      </div>  
      <div style={{display: 'flex', flexDirection: 'row',marginLeft:'25%'}} >
        <button style={{'color':'black',width:'20%'}}onClick={()=>changeShape('/icons/octagon.png')}><img className="NodeIcons" src={'/icons/octagon.png'} style={{'background-color':props.color}} alt=""/>Octagon</button>
        <button style={{'color':'black',width:'20%'}}onClick={()=>changeShape('/icons/nonagon.png')}><img className="NodeIcons" src={'/icons/nonagon.png'} style={{'background-color':props.color}} alt=""/>Nonagon</button>
        <button style={{'color':'black',width:'20%'}}onClick={()=>changeShape('/icons/decagon.png')}><img className="NodeIcons" src={'/icons/decagon.png'} style={{'background-color':props.color}} alt=""/>Decagon</button>
      </div>         
      </>
    )}else{
      return (
        <>
        <div style={{display: 'flex', flexDirection: 'row'}} >
        <h4 style={{marginTop:'14px',marginBottom:'5px'}}>Non-uploaded edits:</h4>
        <span style={{width:'27.5%'}}></span>
        <h4 className="file-functions"> Node Shape:</h4>
        <span style={{width:'1.5%'}}></span>

        <img src={props.src} style={{'background-color':props.color,width:'2.5em',height:'2.5em'}} alt=""/>
        <span style={{width:'2.6%'}}></span>
        <Button onClick={toggleShowMenu}>Select</Button>
      </div>
         </>
      )
    }
}
