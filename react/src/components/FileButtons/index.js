import React, { Component,useState, useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../common/DataContext";
import { Upload, EditorMenu, UploadFile, UploadForm,  } from "./styles";

export const Button = styled.button`

  box-sizing: inherit;
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  min-width: 5vw;
  height: min-content;
  width:15vh;


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

export const FileButtons = (props) => {
  const { setTableData } = useContext(DataContext);
  const { fileID, } = useContext(DataContext);

    const onChange = (e) => {
        let files = e.target.files
        let infile = files[0]
        let formData = new FormData();
        formData.append("infile", infile);
        const request = async () => {
        const response =  await fetch('/api/parse?ID='+fileID, {method:"POST", body: formData})
        if(response.ok){
          const obj= await response.json()
          let UnUpData = obj[obj.length-1]
          obj.splice(-1,1)
          props.action(UnUpData,"UnUpData")
          // path = 
          setTableData(obj);
        }}
        request();

        };  
        
const fileInput = React.useRef();   

return(
   <>


    <Button type='file' name='file'onClick={()=>fileInput.current.click()}>Upload</Button>
          <input 
          ref={fileInput} 
          onChange={(e)=>onChange(e)}
          type="file" 
          style={{ display: 'none' }} />
    <Button onClick={()=>props.action(null,"Download")}>Download</Button>

    </>
    
    );
};