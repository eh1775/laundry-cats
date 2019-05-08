import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'antd';

import firebase from 'firebase';
import { firebase_config } from '../firebase_config.js'
firebase.initializeApp(firebase_config);
const database = firebase.database();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      comlist: []
    }
  }
  componentDidMount() {
    let reference = database.ref('Facility Request');
    reference.on("child_added", (newData) => {
      // console.log(newData.val())
      let a = [[newData.val().comments, newData.val().floor, newData.val().machine, newData.val().problem, newData.val().time]];
      this.setState({
        data: a.concat(this.state.data)
      })
      console.log(this.state.data)
    })
  }

  render() {
    return (
      <div style={{ padding: 30, paddingTop: 140 }}>
        <h1>Welcome to FacilityRequest</h1>
        <Link to="/Manager">
          <Button size="large" type="primary" block>
            Change Status
					</Button>
          <br />
          <br />
        </Link>

        <div>
          {
            this.state.data.map(noti => <div>
              <Link to={{ pathname: '/Worder', state: { datalist: noti} }}>
                <Button num={noti[1]} size="large" block>
                {noti[4]} &nbsp;&nbsp;&nbsp;FLoor&nbsp;{noti[1]}&nbsp;&nbsp;#{noti[2]}
                </Button>
              </Link>
            </div>)
          }
        </div>

        <footer style={{ textAlign: 'center', height: '30px', marginTop: '160px' }} >LaundryCats ©2019 Created by
        Kertu, Selina, Emily, and Eszter</footer>
      </div>
    );
  }
}

export default App;