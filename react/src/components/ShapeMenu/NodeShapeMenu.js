import React from 'react';
import styled from "styled-components";
import { EditorNameField } from 'components/NameFields/EditorNameField';
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
margin-left:1.1%;
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



export const NodeShapeIconWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50% 50%;
  max-width: 25vh;
`;

export const NodeShapeWrapper = styled.div`
  border-TOP: 2px solid #f4753c;
  display: flex;
  padding: 3%;
  flex-direction: column;
`;

export const NodeShapeMenu =(props)=> {


const changeShape = (e) => {
  props.action(e,"NodeShape")

}

const CloseMenu= ()=>{
  props.action(false,"ShowShapeMenu")
}

const toggleShowMenu = ()=>{ 
  if (props.ShowMenu){
     props.action(false,"ShowShapeMenu")
  }else{
     props.action(true,"ShowShapeMenu")
  }
}

    if (props.ShowMenu){
    return (
      <>
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
      </>
    )}else{
      return (
        <>
        <div style={{display: 'flex', flexDirection: 'row',marginTop:'0'}} >

        <h4 style={{marginTop:'0',marginBottom:'2%'}}>Add/Update Editors:</h4>
{/* 
        <div style={{display: 'flex', flexDirection: 'column',marginTop:'0'}} >
        <Button style={{margin:'2% 2%', height:'20px'}} onClick={toggleShowMenu}>Add</Button>
        <Button style={{margin:'2% 2%', height:'20px'}} onClick={toggleShowMenu}>Edit</Button>
        <Button style={{margin:'2% 2%', height:'20px'}} onClick={toggleShowMenu}>Clear</Button>
        </div> */}
        <span style={{width:'15%'}}></span>
        <EditorNameField action={props.action} editorName={props.editorName}editorUsername={props.editorUsername}/>
        <span style={{width:'26.5%'}}></span>
        <h4 className="file-functions" style={{marginTop:'0'}}> Node Shape:</h4>

        <span style={{width:'1.5%'}}></span>

        <img src={props.src} style={{'background-color':props.color,width:'2.5em',height:'2.5em'}} alt=""/>
        <span style={{width:'2.6%'}}></span>
        <Button onClick={toggleShowMenu}>Select</Button>
      </div>
         </>
      )
    }
}
