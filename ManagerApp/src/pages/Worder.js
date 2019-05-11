import React from 'react';
import Buttons from './Buttons';
import { Button } from 'antd';

var logoStyle = {
  width: '30px',
  height: '36px',
};

class Worder extends React.Component {

  goBack = () => {
    window.history.go(-1)
  }

  updateDB = (e,num) => {
    this.props.updateDB(e,num)
  }

  render() {
    return (
      <div>
        <h1 style={{ paddingLeft: '30px' ,paddingTop: '20px'}}>Floor {this.props.alldata.floorN}</h1>
        <p style={{ paddingLeft: '30px'}}>Problem: {this.props.alldata.problemList[this.props.alldata.selectNoti]} </p>
        <p style={{ paddingLeft: '30px'}}>Comments: {this.props.alldata.commentList[this.props.alldata.selectNoti]} </p>
        <div className='allmachines' style={{display: 'flex', justifyContent: 'center', height: '250px'}}>
          <div className='MachineArea' style={{paddingTop: '20px'}}> 
            <p style={{ textAlign: 'center' }}>{this.props.alldata.floorN}{this.props.alldata.machineN}</p>
            <img src={require('./Washer.png')} style={logoStyle} />
            <Buttons status={this.props.alldata.status[this.props.alldata.selectNoti][this.props.alldata.selectNoti]} updateDB={this.updateDB} machine={this.props.alldata.selectNoti}/>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Button onClick={this.goBack} size="large" style={{ margin: '30px' }}>
          Only Change Status
				</Button>
        <Button size="large" type="primary" style={{ margin: '30px' }}>
          Resolved
				</Button>
      </div>


    )

  }
}
export default Worder;