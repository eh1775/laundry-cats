// import React from 'react'


// class Worder extends React.Component {
//   render() {
//     return <h1>Work dOe\rder</h1>
//   }
// }
// export default Worder;

import { Link } from 'react-router-dom';
import React from 'react';
import Buttons from './Buttons';
import './manager.css'
import { Button } from 'antd';
// import 

var logoStyle = {
  width: '30px',
  height: '36px',
};
// const {datalist} = this.props.location.state
//     let floorN = datalist[1];
//     let machineN = datalist[2]

class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fn: '',
      mn: ''
    }
  }
  componentDidMount () {
    const {datalist} = this.props.location.state
    let floorN = datalist[1];
    let machineN = datalist[2]
    this.setState({
      fn: floorN,
      mn: machineN
    })
  }

  goBack = () => {
    window.history.go(-1)
  }

  render() {
    return (
      <div>
        <div>{this.test}</div>
        <h1 style={{ paddingLeft: '30px' }}>Floor {this.state.fn}</h1>
        <div className='allmachines'>
          <div className='MachineArea'>
            <p style={{ textAlign: 'center' }}>#3</p>
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
export default Manager;