import React, { Component } from 'react';
import './App.css';
import { Icon } from 'antd';
import { HashRouter as Router, Route } from 'react-router-dom';
import Manager from './pages/Manager';
import Worder from './pages/Worder.js';
import Home from './pages/Home.js';

import firebase from 'firebase';
import { firebase_config } from './firebase_config';
firebase.initializeApp(firebase_config);
const database = firebase.database();



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: [
        { 0: 'IN USE' },
        { 1: 'OPEN' },
        { 2: 'OPEN' },
        { 3: 'OPEN' },
        { 4: 'OPEN' },
        { 5: 'OPEN' },
        { 6: 'OPEN' },
        { 7: 'OPEN' },
        { 8: 'OPEN' },
        { 9: 'OPEN' },
        { 10: 'OPEN' },
        { 11: 'OPEN' },
        { 12: 'OPEN' },
        { 13: 'OPEN' },
        { 14: 'OPEN' },
        { 15: 'OPEN' },
        { 16: 'OPEN' },
        { 17: 'IN USE' },
        { 18: 'OPEN' },
        { 19: 'OPEN' },
        { 20: 'OPEN' },
        { 21: 'OPEN' },
        { 22: 'OPEN' },
        { 23: 'OPEN' },
        { 24: 'OPEN' },
        { 25: 'OPEN' },
        { 26: 'OPEN' },
        { 27: 'OPEN' },
        { 28: 'OPEN' },
        { 29: 'OPEN' },
        { 30: 'OPEN' },
        { 31: 'OPEN' },
        { 32: 'OPEN'}
      ],
      machineList: [
        { 0: '1A' },
        { 1: '1B' },
        { 2: '1C' },
        { 3: '1D' },
        { 4: '2A' },
        { 5: '2B' },
        { 6: '2C' },
        { 7: '2D' },
        { 8: '3A' },
        { 9: '3B' },
        { 10: '3C' },
        { 11: '3D' },
        { 12: '4A' },
        { 13: '4B' },
        { 14: '4C' },
        { 15: '4D' },
        { 16: '5A' },
        { 17: '5B' },
        { 18: '5C' },
        { 19: '5D' },
        { 20: '6A' },
        { 21: '6B' },
        { 22: '6C' },
        { 23: '6D' },
        { 24: '7A' },
        { 25: '7B' },
        { 26: '7C' },
        { 27: '7D' },
        { 28: '8A' },
        { 29: '8B' },
        { 30: '8C' },
        { 31: '8D' },
        { 32: '6F' },
      ],
      problemList: [],
      commentList: [],
      floorN: '',
      machineN: '',
      selectNoti: '',
    }
  }


  componentDidMount = () => {
    let reference = database.ref('Facility Request');
    reference.on("child_added", (newData) => {
      let a = [[newData.val().comments, newData.val().floor, newData.val().machine, newData.val().problem, newData.val().subtime]];
      let b = this.state.status;
      let c = (newData.val().floor + newData.val().machine).toString();
      let d = this.state.commentList;
      let e = this.state.problemList;
      for (var i = 0 ; i< this.state.machineList.length; i++){
        if (this.state.machineList[i][i] == c) {
          b[i][i] = 'PENDING';
          d[i] = newData.val().comments;
          e[i] = newData.val().problem;
          this.setState({
            data: a.concat(this.state.data),
            status: b,
            problemList: e,
            commentList: d
          })
          break;
        }
      };
    })
  }
 
  selectN = (f, machi) => {
    for (var i = 0 ; i< this.state.machineList.length; i++){
      if (this.state.machineList[i][i] == f+machi) {
        this.setState({
          floorN: f,
          machineN: machi,
          selectNoti: i
        })
        break;
      }
    };
  }

  updateDB = (e, i) => {
    let b = this.state.status;
    b[i][i] = e;
    this.setState({
      status: b
    })
  }


  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ background: 'white', height: 650, width: 400, border: '1px solid #ddd' }}>
          
          <Router>
            <Route path='/' exact component={props => {
              return <Home data={this.state.data} selectN={this.selectN} />
            }} />
            <Route path='/Manager' exact component={props => {

              return <Manager statusdata={this.state.status} machinedata={this.state.machineList} updateDB={this.updateDB}/>
            }} />
            <Route path='/Worder' exact component={props => {
              return <Worder alldata={this.state} updateDB={this.updateDB}/>
            }} />
          </Router>
        </div>
      </div>
    )
  }
}

export default App;