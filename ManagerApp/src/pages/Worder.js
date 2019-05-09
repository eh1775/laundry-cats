import React, { Component } from 'react';
import Buttons from './Buttons';
import './manager.css';
import { Button } from 'antd';

var logoStyle = {
  width: '30px',
  height: '36px',
};

class Worder extends React.Component {

  goBack = () => {
    window.history.go(-1)
  }

  render() {
    return (
      <div>
        <div>{console.log(this.props.alldata)}</div>
        <h1 style={{ paddingLeft: '30px' }}>Floor {this.props.alldata.floorN}</h1>
        <div className='allmachines'>
          <div className='MachineArea'> 
            <p style={{ textAlign: 'center' }}>#{this.props.alldata.machineN}</p>
            <img src={require('./Washer.png')} style={logoStyle} />
            <Buttons />
          </div>
          <div className='MachineArea'>
            <p style={{ textAlign: 'center' }}>#4</p>
            <img src={require('./Washer.png')} style={logoStyle} />
            <Buttons />
          </div>
          <div className='MachineArea'>
            <p style={{ textAlign: 'center' }}>#5</p>
            <img src={require('./Dryer.png')} style={logoStyle} />
            <Buttons />
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* <Link to="/Home"> */}
        <Button onClick={this.goBack} size="large" style={{ margin: '30px' }}>
          Only Change Status
				</Button>
        {/* </Link> */}
        <Button size="large" type="primary" style={{ margin: '30px' }}>
          Resolved
				</Button>
      </div>


    )

  }
}
export default Worder;