import React, { Component, useState } from "react";
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content:center;
  align-items: center;
  text-align: center;
  box-sizing: inherit;
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  min-width: 5vw;
  height: 5vh;
  width:15vh;

  overflow: visible;
  border-radius: 6px;
  margin:auto;
  margin-top: 1em;
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
      export const DownloadButton =(props)=> {
          return (
            <>
                <Button onClick={()=>props.action(null,"Download")}>Download</Button>
            </>
          );

    }