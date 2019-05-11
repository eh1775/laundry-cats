import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase';
import { firebase_config } from './firebase_config.js'
firebase.initializeApp(firebase_config);
const database = firebase.database();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput1: "",
      currentInput2: "",
      currentInput3: "",
      currentInput4: "",

    }
  }


  pushToDB(time) {
    let reference = database.ref("Facility Request");
    reference.push({ floor: this.state.currentInput1, machine: this.state.currentInput2, problem: this.state.currentInput3, comments: this.state.currentInput4, subtime: time });
  }

  updateInput1 = (value) => {
    this.setState({
      currentInput1: value.target.value
    });
  }
  updateInput2 = (value) => {
    this.setState({
      currentInput2: value.target.value
    });
  }

  updateInput3 = (value) => {
    this.setState({
      currentInput3: value.target.value
    });
  }

  updateInput4 = (value) => {
    this.setState({
      currentInput4: value.target.value
    });
  }

  handleSubmit = (e) => {
    var date = new Date();
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString();
    var hour = date.getHours().toString();
    var minute = date.getMinutes().toString();
    var time = year + '/' + month + '/' + day + ' ' + hour + ':' + minute
    alert('Thank you! Your response was submitted');
    this.pushToDB(time)
    e.preventDefault();
    this.setState({
      currentInput1: "",
      currentInput2: "",
      currentInput3: "",
      currentInput4: "",
    });
  }
  render() {
    return (
      <div className="App">
        <img src={logo} />
        <br></br>
        <br></br>
        <form onSubmit>



          <select type="text" value={this.state.currentInput1} onChange={this.updateInput1}>
            <option value="" disabled selected>Floor #</option>
            <option> 1</option>
            <option> 2</option>
            <option> 3</option>
            <option> 4</option>
            <option> 5</option>
            <option> 6</option>
            <option> 7</option>
            <option> 8</option>
          </select>

          <br></br>

          <select type="text" value={this.state.currentInput2} onChange={this.updateInput2}>
            <option value="" disabled selected>Machine #</option>
            <option> A</option>
            <option> B</option>
            <option> C</option>
            <option> D</option>
            <option> E</option>
            <option> F</option>
          </select>

          <br></br>

          <select type="text" value={this.state.currentInput3} onChange={this.updateInput3}>
            <option value="" disabled selected>Problem</option>
            <option> Won't fill with water</option>
            <option> The door won't open </option>
            <option> Does not spin </option>
            <option> Stopped mid-cycle </option>
            <option> Weird noises </option>
            <option> Water not draining from washing machine </option>
            <option> Machine is displaying an error </option>
            <option> Weird smell</option>
            <option> Other...</option>

          </select>


          <br></br>


          <textarea placeholder="Optional comments" value={this.state.currentInput4} onChange={this.updateInput4}></textarea>
          <br></br>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>


      </div>

    );
  }
}

export default App;
