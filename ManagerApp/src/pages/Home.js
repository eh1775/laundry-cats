import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'antd';



class App extends React.Component {

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
        <Link to="/Worder">
          <Button size="large" block>
            Facility Request   F2 #4   11:23 AM
				    </Button>
        </Link>
        <Button size="large" block>
            Facility Request   F3 #8  10:05 AM
				</Button>
        <Button size="large" block>
            Facility Request   F6 #14 07:22 AM
				</Button>
        <footer style={{ textAlign: 'center', height: '30px', marginTop: '160px' }} >LaundryCats ©2019 Created by 
        Kertu, Selina, Emily, and Eszter</footer>
      </div>
    );
  }
}

export default App;