import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'antd';

// import firebase from 'firebase';
// import { firebase_config } from '../firebase_config.js'
// firebase.initializeApp(firebase_config);
// const database = firebase.database();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
      // comlist: []
    }
  }
  
  handleClick(e, floorN, machineN ) {
    console.log('noti',floorN, machineN)
    this.props.selectN(floorN, machineN)
  }

  render() {
    return (
      <div style={{ padding: 30, paddingTop: 80 }}>
        <h1>Welcome to FacilityRequest</h1>
        <Link to="/Manager">
          <Button size="large" type="primary" block>
            Change Status
					</Button>
          <br />
          <br />
        </Link>

        <div className='noti' style={{height: '320px', overflow: 'auto'}}>
          {
            this.props.data.map(noti => <div>
              <Link to='/Worder'>
                <Button num={noti[1]} size="large" block onClick={(e) => this.handleClick(e,noti[1],noti[2])}>
                {noti[4]} &nbsp;&nbsp;&nbsp;Floor&nbsp;{noti[1]}&nbsp;&nbsp;#{noti[2]}
                </Button>
              </Link>
            </div>)
          }
          {console.log(this.props.data)}
        </div>

        <footer style={{ textAlign: 'center', height: '30px', marginTop: '40px' }} >LaundryCats ©2019 Created by
        Kertu, Selina, Emily, and Eszter</footer>
      </div>
    );
  }
}

export default App;