import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import firebase from 'firebase';
import {firebase_config} from './firebase_config.js'
firebase.initializeApp(firebase_config);
const database = firebase.database();

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentInput1: "",
      currentInput2: "",
      currentInput3: "", 
      currentInput4: ""

    }
  }
  pushToDB(){
    // Level 1 - read this if you are coming here from Levels/LevelONE.js
    // 
    // this is where want to create a simple function to push data to
    // our Firebase project. To test the function, we use a dummy 
    // button in this very component (prepared below)

    // alert("Dummy button works!");

    // we can learn how to push to the database from here:
    // https://firebase.google.com/docs/database/web/lists-of-data
    let reference = database.ref("Facility Request");
    reference.push( {floor: this.state.currentInput1, machine: this.state.currentInput2, problem: this.state.currentInput3, comments: this.state.currentInput4}  );
  }

  updateInput1 = (value) =>{
    this.setState({
      currentInput1: value.target.value
    });
  }
  updateInput2 = (value) =>{
    this.setState({
      currentInput2: value.target.value
    });
  }

  updateInput3 = (value) =>{
    this.setState({
      currentInput3: value.target.value
    });
  }

  updateInput4 = (value) =>{
    this.setState({
      currentInput4: value.target.value
    });
  }

  handleSubmit = (e) =>{
    alert('Thank you! Your response was submitted');
    this.pushToDB()
    e.preventDefault();
    this.setState({
      currentInput1:"",
      currentInput2: "", 
      currentInput3: "",
      currentInput4: "",
    });
  }
  render(){
    return (
      <div className = "App">
      <img src={logo}/>
      <form onSubmit>

     
      
      <br></br> 
      <select type = "text" value = {this.state.currentInput1} onChange = {this.updateInput1}> 
      <option value="" disabled selected>Floor #</option> 
      <option> 1</option>
      <option> 2</option>
      <option> 3</option>
      <option> 4</option>
      <option> 5</option>
      <option> 6</option>
      <option> 7</option>
      <option> 8</option>
      <option> 9</option>
      <option> 10</option>
      <option> 11</option>
      </select>
    
    
      <br></br>
      <select type = "text" value = {this.state.currentInput2} onChange = {this.updateInput2}>
      <option value="" disabled selected>Machine #</option> 
      <option> A</option>
      <option> B</option>
      <option> C</option>
      <option> D</option>
      <option> E</option>
      <option> F</option>
      <option> G</option>
      <option> H</option>
      <option> I</option>
      <option> J</option>
      <option> K</option>
      </select>
    

      <br></br>
      <select type = "text" value = {this.state.currentInput3} onChange = {this.updateInput3}> 
      <option value="" disabled selected>Problem</option> 
      <option> Won't fill with water</option>
      <option> The door won't open </option>
      <option> Does not spin </option>
      <option> Stopped mid-cicle </option>
      <option> Weird noises </option>
      <option> Water not draining from washing machine </option>
      <option> Machine is displaying an error </option>
      <option> Weird smell</option>
      <option> Other...</option>
     
      </select>
      < br></br>
      <br></br>
      


    
      <textarea placeholder = "Optional comments" value ={this.state.currentInput4} onChange = {this.updateInput4}></textarea> 
      < br></br>
      < br></br>
      <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
      </div> 

    );
  }
}

export default App;
