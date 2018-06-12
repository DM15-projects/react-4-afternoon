import React, { Component } from "react";
import axios from "axios";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(response => {
        // console.log(response);
        this.setState({ studentInfo: response.data });
      });
  }

  render() {
    const info = this.state.studentInfo;
    // let myStudentInfo = this.state.studentInfo.map((student,index)=>{
    //   return (

    //   )
    // })
    return (
      <div className="box">
        <h1>Student</h1>
        {/* <h1>{this.state.studentInfo.first_name}</h1> */}

        <h1>
          {info.first_name} {info.last_name}
        </h1>
        <h3>Grade: {info.grade}</h3>
        <h3>Email: {info.email}</h3>
      </div>
    );
  }
}
