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
      status: [],
      floorN: '',
      machineN: ''
    }
  }


  componentDidMount = () => {
    window.addEventListener('hashchange', e => {
      this.setState({ showBack: e.newURL !== 'http://localhost:3000/#/' })
    })
    let reference = database.ref('Facility Request');
    let reference1 = database.ref('Machine Status');
    reference.on("child_added", (newData) => {
      let a = [[newData.val().comments, newData.val().floor, newData.val().machine, newData.val().problem, newData.val().subtime]];
      this.setState({
        data: a.concat(this.state.data)
      })
    })
    reference1.on('value', function(snapshot) {
      console.log('snapshot',snapshot.val())
      // let a = snapshot.val()
      // this.setState({
      //   status: a
      // })
    })
    
  }

  

  selectN=(f, machi) => {
    this.setState({
      floorN: f,
      machineN: machi
    })
  }

  goBack = () => {
    window.history.go(-1)
  }

  render() {
    const { showBack } = this.state
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 15 }}>
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
              return <Home data={this.state.data} selectN={this.selectN}/>
            }}/>
            <Route path='/Manager' exact component={props => {
              return <Manager alldata={this.state}  />
            }}/>
            <Route path='/Worder' exact component={props => {
              return <Worder alldata={this.state} />
            }}/>
          </Router>
        </div>
      </div>
    )
  }
}

export default App;