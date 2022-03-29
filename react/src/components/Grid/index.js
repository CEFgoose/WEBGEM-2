import React, { Component, useState, useContext, useEffect } from "react";
import {
  Box,
  Card,

  Button,
  Divider,
  Typography,
} from "@material-ui/core";
import ReactGridLayout, { WidthProvider } from "react-grid-layout";
import "./styles.css";
import { FileButtons } from "components/FileButtons";
import { EditorButtons } from "components/TableButtons/EditorButtons";
import { ExportButton } from "../FileButtons/ExportButton.js";
import { DownloadButton } from "../FileButtons/DownloadButton.js";
import { EditorTable } from "components/Table"
import { EditButton } from "../Edit/EditButton.js"
import { TeamNameField } from "../TeamName/TeamNameField.js"
import { EditorNameField } from "../NameFields/EditorNameField.js"
import { UserNameField } from "../NameFields/UserNameField.js"
import { LineWidthSpin} from "../Spinners/LineWidthSpin.js"
import { UnUpLineWidthSpin} from "../Spinners/UnUpLineWidthSpin.js"
import { NodeSizeSpin} from "../Spinners/NodeSizeSpin.js"
import { UnUpNodeSizeSpin} from "../Spinners/UnUpNodeSizeSpin.js"
import { LineColorPicker } from "../ColorPickers/LineColorPicker.js"
import { UnUpLineColorPicker } from "../ColorPickers/UnUpLineColorPicker.js"
import { NodeColorPicker } from "../ColorPickers/NodeColorPicker.js"
import { UnUpNodeColorPicker } from "../ColorPickers/UnUpNodeColorPicker.js"
import { NodeShapeMenu } from "../ShapeMenu/NodeShapeMenu.js"
import { UnUpNodeShapeMenu } from "../ShapeMenu/UnUpNodeShapeMenu.js"
import { RemoveButtons } from "../TableButtons/RemoveButtons.js"
import { MoveButtons } from "../TableButtons/MoveButtons.js"
import { DataContext } from "../../common/DataContext";
import { saveAs } from 'file-saver'
import { GEM, MobileLineandNodeWrapper,MobileFileButtonsWrapper, EverythingbutTable ,MobileTeamTableWrapper, MobileTeamTableBtns,MobileViewWrapper ,AddUpdateEditor, FileButtonsWrapper, UpExDown, UnUpLineandNodeWrapper, LineandNodeWrapper, TeamTable, UnUploadedEditor, TeamTableBtns, AddUpdateBtns  } from "./styles.js";
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';




var inEditName, inUserName, inLineWidth, inNodeSize, inLineWidth, inNodeSize, inLineColor, inNodeColor, inNodeShape;

const GridLayout = WidthProvider(ReactGridLayout);

export const Grid = () => {
  const { tableData, 
  setTableData,
  fileID,
  generateGemJsonId,
  selectedRow,
  setSelectedRow,
  EditorRow,
  setEditorRow,
  } = useContext(DataContext);
  const[lastOutJson,setLastOutJson]=useState({})
  const [state, setState] = useState({
    tableData:tableData,
    TeamName:"",
    EditorName:"",
    UserName:"",
    LineColor: '#A9A9A9',
    LineWidth: 5,
    NodeColor:"#D3D3D3",
    NodeSize:5,
    NodeShape:'/icons/circle.png',
    UnUpLineColor: 'green',
    UnUpNodeColor: 'orange',
    UnUpLineWidth:5,
    UnUpNodeSize:5,
    UnUpNodeShape:'/icons/square.png',
    FileIndex: fileID,
    RowData:{},
    ShowShapeMenu:false,
    ShowUnUpShapeMenu:false,
    ShowLineColorMenu:false,
  
    ShowUnUpLineColorMenu:false,
    ShowNodeColorMenu:false,

    ShowUnUpNodeColorMenu:false,
    addEditor:true,
    newFile:true,

  });

  useEffect((fileID) => {
    if (fileID == null) {
      generateGemJsonId();
    }
  }, [])

    const GetUnUpload=() =>{
      if (state.TeamName ==="" && tableData[0].NAME !=null){
        alert("Please enter a valid team name before exporting")
        return
      }
      if (tableData[0].NAME ===null){
        alert("No Data to export. You must either import an existing .mapscc file to edit, or populate the table with editor data in order to export.")
        return
      }
      let path = '/api/uploads/' + state.TeamName + ".mapcss";
      const Downrequest = async () => {
        return fetch(path, {method: "GET",responseType: 'blob'})
        .then(response=>response.blob())
        .then(blob => saveAs(blob, state.TeamName + ".mapcss"))
      }
      let outJson= [{"TeamName":state.TeamName,"LineColor":state.UnUpLineColor,"lineWidth":state.UnUpLineWidth,"NodeSize":state.UnUpNodeSize,"NodeColor":state.UnUpNodeColor,"NodeShape":state.UnUpNodeShape}]
      outJson= JSON.stringify(outJson)
      let url ='/api/compile?fileID='+fileID
      const goEx = async () => {
        const response =  await fetch(url, {method: "POST", body: outJson ,headers: {'Content-Type': 'application/json'}})
        if(response.ok){
          const obj= await response.text()
          return fetch(path, {method: "GET",responseType: 'blob'})
          .then(response=>response.blob())
          .then(blob => saveAs(blob, state.TeamName + ".mapcss"))
        }}
        goEx();
    }

    const changeFeature=(e,f) =>{
    let outJson = state.RowData
    switch(f){
      case "LineColor":
        setState({...state,LineColor:e});
        break;

      case "NodeColor":
        setState({...state,NodeColor:e});
        break;  

      case "UnUpLineColor":
        setState({...state,UnUpLineColor:e});
        break;  

      case "UnUpNodeColor":
        setState({...state,UnUpNodeColor:e});
        break;  

      case "NodeShape":
        setState({...state,NodeShape:e,ShowShapeMenu:false})
        break;  

      case "UnUpNodeShape":
        setState({...state,UnUpNodeShape:e,ShowUnUpShapeMenu:false})
        
        break; 

      case "+LineWidth":
        if (state.LineWidth !== 10){
          setState({ ...state,LineWidth:state.LineWidth +1})}
        break; 

      case "-LineWidth":
        if (state.LineWidth !== 0){
          setState({ ...state,LineWidth:state.LineWidth -1})}
        break; 

      case "+UnUpLineWidth":
        if (state.UnUpLineWidth !== 10){
          setState({ ...state,UnUpLineWidth:state.UnUpLineWidth +1})}
        break; 

      case "-UnUpLineWidth":
        if (state.UnUpLineWidth !== 0){
          setState({ ...state,UnUpLineWidth:state.UnUpLineWidth -1})}
        break; 

      case "+NodeSize":
        if (state.NodeSize !== 10){
          setState({ ...state,NodeSize:state.NodeSize +1})}
        break;

      case "-NodeSize":
        if (state.NodeSize !== 0){
          setState({ ...state,NodeSize:state.NodeSize -1})}
      break;

      case "+UnUpNodeSize":
         if (state.UnUpNodeSize !== 10){
          setState({ ...state,UnUpNodeSize:state.UnUpNodeSize +1})}
      break; 

      case "-UnUpNodeSize":
         if (state.UnUpNodeSize !== 0){
          setState({ ...state,UnUpNodeSize:state.UnUpNodeSize -1})}
      break; 

      case "TeamName":
         if (state.UnUpNodeSize !== 0){
          setState({ ...state,TeamName:e})}
      break; 

      case "EditorName":
        setState({ ...state,EditorName:e})
      break; 

      case "UserName":
        setState({ ...state,UserName:e})
      break; 

      case "ShowShapeMenu":
        setState({ ...state,ShowShapeMenu:e})
      break; 

      case "ShowUnUpShapeMenu":
        setState({ ...state,ShowUnUpShapeMenu:e})
      break; 


      case "ShowLineColorMenu":
        setState({ ...state,ShowLineColorMenu:e})
      break; 

      case "ShowUnUpLineColorMenu":
        setState({ ...state,ShowUnUpLineColorMenu:e})
      break; 

      case "ShowNodeColorMenu":
        setState({ ...state,ShowNodeColorMenu:e})
      break; 

      case "ShowUnUpNodeColorMenu":
        setState({ ...state,ShowUnUpNodeColorMenu:e})
      break; 

      case "GetRowData":
        setState({ ...state,RowData:e})
      break; 

      case "Download":
        GetUnUpload()
      break; 

      case "UnUpData":
        setState({ ...state,
        newFile:false,
        TeamName:e[0]["TEAMNAME"],
        UnUpNodeColor:e[0]["UNUPNODECOLOR"], 
        UnUpNodeSize:e[0]["UNUPNODESIZE"],
        UnUpNodeShape:"/icons/"+e[0]["UNUPNODESHAPE"]+".png",  
        UnUpLineColor:e[0]["UNUPLINECOLOR"],
        UnUpLineWidth:e[0]["UNUPLINEWIDTH"],
      })
  
      break; 


      case "RemoveEditor":
          outJson=JSON.stringify(outJson)
          const request = async () => {
          const response =  await fetch('/api/table?sub=remove&fileID='+fileID, {method: "POST", body: outJson ,headers: {'Content-Type': 'application/json'}})
          if(response.ok){
            let object = await response.json()
            object=JSON.stringify(object)
            object=JSON.parse(object)
            setTableData(object)
          }}
          request();
      break; 

      case "RemoveAll":
        const removeRequest = async () => {
        const response =  await fetch('/api/removeAll?fileID='+fileID, {method: "GET"})
        if(response.ok){
          let object = await response.json()
          object=JSON.stringify(object)
          object=JSON.parse(object)
          setTableData(object)
        }}
        removeRequest();
        setState({...state,
          newFile:true,
          TeamName:""
        })
      
      break;

      case "MoveUp":
        console.log(outJson)

        if (outJson === lastOutJson){
          outJson.rowId=outJson.rowId-1
        }
        const moveUpRequest = async () => {
        const response =  await fetch('/api/table?sub=moveUp&fileID='+fileID,{method: "POST", body: JSON.stringify(outJson) ,headers: {'Content-Type': 'application/json'}})
        if(response.ok){
          let object = await response.json()
          object=JSON.stringify(object)
          object=JSON.parse(object)
          setTableData(object)
        }}
        moveUpRequest();
        if (selectedRow !== 0){
          setSelectedRow(selectedRow - 1);
          setEditorRow(selectedRow-1)
          }
        setLastOutJson(outJson)
      break;

      case "MoveDown":
        if (outJson === lastOutJson){
          outJson.rowId=outJson.rowId+1
        }
        const moveDownRequest = async () => {
        const response =  await fetch('/api/table?sub=moveDown&fileID='+fileID,{method: "POST", body: JSON.stringify(outJson) ,headers: {'Content-Type': 'application/json'}})
        if(response.ok){
          let object = await response.json()
          object=JSON.stringify(object)
          object=JSON.parse(object)
          setSelectedRow(selectedRow + 1)
          setEditorRow(selectedRow +1)
          setTableData(object)
        }}
        moveDownRequest();
        setSelectedRow(selectedRow +1);
        setEditorRow(selectedRow+1)
        setLastOutJson(outJson)

      break;

      case "Clear":
        console.log("clear")
        setState({...state,
        EditorName: "",
        UserName: "",
        LineColor: '#A9A9A9',
        LineWidth: 5,
        NodeColor:"#D3D3D3",
        NodeSize:5,
        NodeShape:'/icons/circle.png',
        RowData:{},
        addEditor:true
      })
      break;
      default:
    }

  }

  function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


    const ChangeAddButton=()=>{
      let outJson = state.RowData;
      var checkJson;
      console.log(outJson)
      if(Object.entries(outJson).length !== 0){
        checkJson = outJson
      }
        if ( !checkJson){
            alert("Invalid Selection");
        }
        else
        {
      setState({ ...state,addEditor:false})
     //
    }
  }

  useEffect(() => {
    if(state.addEditor !== true){
      EditEditor();
      // console.log(state)
    }
    // else if(!state.EditorName){
      // EditEditor();
    // }
    

  }, [state.addEditor]);

    const EditEditor = () => {
      let outJson = state.RowData
      console.log(state.RowData)
      let checkJson= outJson
      inEditName = checkJson['editor']['NAME']

      inUserName = checkJson['editor']['UID']
      console.log("1",inEditName,inUserName)
      inLineWidth = checkJson['editor']['LINEWIDTH']
      inNodeSize = checkJson['editor']['NODESIZE']
      inLineColor=checkJson['editor']['LINECOLOR']
      inNodeColor=checkJson['editor']['NODECOLOR']
      inNodeShape=checkJson['editor']['NODESHAPE']
      console.log("2",inEditName,inUserName)
      setState({...state,
        EditorName: inEditName,
        UserName: inUserName,
        LineWidth: parseInt(inLineWidth),
        NodeSize: parseInt(inNodeSize),
        LineColor: inLineColor,
        NodeShape:inNodeShape,
        NodeColor:inNodeColor,
      })
      console.log("3",inEditName,inUserName)
      console.log("1",state.EditorName,state.UserName)
    }
    
    const updateEditor = (e) => {
      let sub = e
      if (state.EditorName === "" && e === "add"){
        alert("Please enter a valid Name for the Editor")
        return;
      }
      if (state.UserName === "" && e === "add"){
          alert("Please enter a valid OSM Username")
          return;

      }
      else if(state.EditorName === "Mappy McMappington III" && e ==="update"){
        alert("You must first select an Editor from the table to update. ")
        return;
      }
    
    let outJson = state.RowData
    var checkJson;
    if(Object.entries(outJson).length !== 0){
     checkJson = outJson
    }
    var index;
    if (checkJson){
      index = checkJson["rowId"]
    }
    let entry = {'NAME':state.EditorName,"UID":state.UserName,'NODESHAPE':state.NodeShape,'NODECOLOR':state.NodeColor,"NODESIZE":state.NodeSize,'LINEWIDTH':state.LineWidth,"LINECOLOR":state.LineColor}
    entry=JSON.stringify(entry)
    let url ='/api/update?sub='+sub+'&index='+index+'&infile='+fileID+"&newFile="+state.newFile
    const update = async () => {
      const response =  await fetch(url, {method: "POST", body: entry ,headers: {'Content-Type': 'application/json'}})
      if(response.ok){
        const obj= await response.json()
        setTableData(obj)
      }}
    update();
    setState({...state,
      EditorName:"",
      UserName: "",
      LineColor: '#A9A9A9',
      LineWidth: 5,
      NodeColor:"#D3D3D3",
      NodeSize:5,
      NodeShape:'/icons/circle.png',
      addEditor:true
      })
    } 

  return (
    <div className="Gem-div" >
      {/* <BrowserView> */}
        <GEM>
            <TeamTable>
                { tableData ? <EditorTable useData={tableData} action={changeFeature}/> : null}
            </TeamTable>
            <div className="IMMenuLabel" >
              <div className='importLabelDiv'><h4 className="import-label" >Import/Export:</h4></div>
              <Divider/>
              <h4 className="team-name-label">Team Name:</h4> 
              <TeamNameField action={changeFeature} value={state.TeamName}/>
              <Divider/>
              <h4 className="file-functions">File Import/Export:</h4>
              <FileButtons fileID={state.fileID} action={changeFeature}action2={ GetUnUpload } />
              <Divider/>
              <h4 className="file-functions">Delete Editors:</h4>
                <RemoveButtons action={changeFeature}/>
                <Divider/>
              <h4 className="file-functions">Move Editors:</h4>
                <MoveButtons action={changeFeature}/>
                <Divider/>
                <h4 className="file-functions">Update Editors:</h4>
                <EditorButtons action={changeFeature} action2={updateEditor}action3={ChangeAddButton}bool={state.addEditor}/>

            </div>
        </GEM>
        <EverythingbutTable>
          <div className="MenuLabel">
              <UnUpNodeShapeMenu action={changeFeature}color={state.UnUpNodeColor}src={state.UnUpNodeShape} ShowMenu={state.ShowUnUpShapeMenu}/>
              <Divider/>
              <UnUpNodeSizeSpin num={state.UnUpNodeSize}action={changeFeature}action2={changeFeature}color={state.UnUpNodeColor}showMenu={state.ShowUnUpNodeColorMenu}/>
              <Divider/>
              <UnUpLineWidthSpin num={state.UnUpLineWidth}action={changeFeature}action2={changeFeature}color={state.UnUpLineColor}showMenu={state.ShowUnUpLineColorMenu}/>
          </div>
          <div className="MenuLabel">
            <NodeShapeMenu action={changeFeature}color={state.NodeColor}src={state.NodeShape} ShowMenu={state.ShowShapeMenu} editorName={state.EditorName} editorUsername={state.UserName}/>
            <Divider/>
            <NodeSizeSpin action={changeFeature}num={state.NodeSize}color={state.NodeColor}showMenu={state.ShowNodeColorMenu}/>
            <Divider/>
            <LineWidthSpin action={changeFeature}num={state.LineWidth}color={state.LineColor}showMenu={state.ShowLineColorMenu}/>
          </div>
        </EverythingbutTable>
      </div>
    );
}