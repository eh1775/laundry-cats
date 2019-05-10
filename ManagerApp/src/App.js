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
      showBack: false,
      status: [
        { 0: 'IU' },
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
        { 15: 'OPEN' }
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
        { 15: '4D' }
      ],
      floorN: '',
      machineN: '',
      selectNoti: '',
    }
  }


  componentDidMount = () => {
    window.addEventListener('hashchange', e => {
      this.setState({ showBack: e.newURL !== 'http://localhost:3000/#/' })
    })
    let reference = database.ref('Facility Request');
    reference.on("child_added", (newData) => {
      let a = [[newData.val().comments, newData.val().floor, newData.val().machine, newData.val().problem, newData.val().subtime]];
      let b = this.state.status;
      let c = (newData.val().floor + newData.val().machine).toString();
      for (var i = 0 ; i< this.state.machineList.length; i++){
        if (this.state.machineList[i][i] == c) {
          b[i][i] = 'PENDING';
          this.setState({
            data: a.concat(this.state.data),
            status: b
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

  goBack = () => {
    window.history.go(-1)
  }

  render() {
    const { showBack } = this.state
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
        <div style={{ background: 'white', height: 650, width: 400, border: '1px solid #ddd' }}>
          {!showBack ? null : (
            <div
              style={{
                borderBottom: '1px solid #ddd',
                height: 50,
                lineHeight: '50px',
                paddingLeft: 10,
                fontSize: 16,
                cursor: 'pointer'
              }}
            >
              <div onClick={this.goBack}>
                <Icon type="left" /> &nbsp; Back
							</div>
            </div>
          )}
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