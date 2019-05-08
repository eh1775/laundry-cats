import React from 'react';
import Buttons from './Buttons';
import './manager.css';


var logoStyle = {
  width: '30px',
  height: '36px',
};

class Manager extends React.Component {
  
  
  render() {
    return (
      <div>
        <h1 style={{ paddingLeft: '30px', fontSize: '15px' }}>F1</h1>
        <div className='allmachines'>
          <div className='MachineArea'>
            <p style={{textAlign:'center'}}>#1</p>
            <img src={require('./Washer.png')} style={logoStyle} />
            <Buttons />
          </div>
          <div className='MachineArea'>
            <p style={{textAlign:'center'}}>#2</p>
            <img src={require('./Dryer.png')} style={logoStyle} />
            <Buttons />
          </div>
        </div>
        <h1 style={{ paddingLeft: '30px', fontSize: '15px'}}>F2</h1>
        <div className='allmachines'>
          <div className='MachineArea'>
            <p style={{textAlign:'center'}}>#3</p>
            <img src={require('./Washer.png')} style={logoStyle} />
            <Buttons />
          </div>
          <div className='MachineArea'>
          <p style={{textAlign:'center'}}>#4</p>
            <img src={require('./Washer.png')} style={logoStyle} />
            <Buttons />
          </div>
          <div className='MachineArea'>
          <p style={{textAlign:'center'}}>#5</p>
            <img src={require('./Dryer.png')} style={logoStyle} />
            <Buttons />
          </div>
        </div>
      </div>


    )

  }
}
export default Manager;