import React, { Component } from "react";






export class TeamNameField extends Component {
  constructor() {
    super();
    this.state = {
    };

  }

  handleChangeComplete = (text) => {
    this.setState({ value: text.target.value}, ()=>{
    this.props.action(this.state.value,"TeamName")
        })
}


  render() {
    return (

            <input
              style={{justifyContent:'center',marginTop:'1%',marginBottom:'5%'}}
              name="uname"
              type="text"
              value={this.props.value}
              onChange={this.handleChangeComplete}
            />

    );
  }
}
