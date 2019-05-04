import React from 'react';
import Button from './Buttons';
import './manager.css'

var logoStyle = {
  width: '30px',
  height: '36px',
};

class Manager extends React.Component {

  render() {
    return (
      <div>
        <h1 style={{paddingLeft:'30px'}}>F1</h1>
        <div className='MachineArea'>

          <img src={require('./Washer.png')} style={logoStyle} />
          <Button />
        </div>
        <div className='MachineArea'>

          <img src={require('./Dryer.png')} style={logoStyle} />
          <Button />
        </div>
      </div>


    )

  }
}
export default Manager;