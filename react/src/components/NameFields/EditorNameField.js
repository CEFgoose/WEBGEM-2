import React from "react";
import "./styles.css";

export const EditorNameField = (props) => {
    console.log(props)
const handleNameComplete = (text) => {
    props.action(text.target.value,"EditorName")
}
const handleUsernameComplete = (text) => {
    props.action(text.target.value,"UserName")
}
    return (
        <div style={{display: 'flex', flexDirection: 'column',marginTop:'0',marginBottom:'0'}} >
        <div style={{display: 'flex', flexDirection: 'row',marginTop:'0',marginBottom:'0'}} >
        <h4 style={{marginTop:'0',marginBottom:'0',marginRight:'6.5%'}}> Name:</h4>
            <input style={{display: 'flex',marginTop:'.5%',marginBottom:'0',marginLeft:'12.5%'}}
              name="fname"
              type="text"
              value={props.editorName}
              onChange={handleNameComplete}
            />
        </div>
        <div style={{display: 'flex', flexDirection: 'row',marginTop:'0',marginBottom:'0'}} >
        <h4 style={{marginTop:'0',marginBottom:'0'}}> Username:</h4>
            <input style={{display: 'flex',marginTop:'.5%',marginBottom:'0',marginRight:'0'}}
              name="uname"
              type="text"
              value={props.editorUsername}
              onChange={handleUsernameComplete}
            />
        </div>
        </div>
    );
}

