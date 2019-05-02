import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

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
    alert('Your response was submitted');
    e.preventDefault();
    this.setState({
      currentInput1: "",
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
      <label>
        Name: 
      <input type= "text" value = {this.state.currentInput1} onChange = {this.updateInput1}/> < br></br>
      </label>

      <label>
        Room Number: 
      <input type = "text" value = {this.state.currentInput2} onChange = {this.updateInput2}/>< br></br>
      </label>

      <label>
        Location of Problem: 
      <input type = "text" value = {this.state.currentInput4} onChange = {this.updateInput4}/>< br></br>
      </label>

      <label>
        Comments: 
      <textarea value ={this.state.currentInput3} onChange = {this.updateInput3}></textarea> < br></br>
      </label>
      <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
      </div> 

    );
  }
}

export default App;
