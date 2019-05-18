import React from 'react';
import Buttons from './Buttons';
import { Button } from 'antd';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

var logoStyle = {
  // width: '30px',
  height: '36px',
};

class Worder extends React.Component {


  updateDB = (e, num) => {
    this.props.updateDB(e, num)
  }

  render() {
    return (
      <div>

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

          <Link to="/">
            <Icon type="left" /> &nbsp; Back
          </Link>
        </div>

        <h1 style={{ paddingLeft: '30px', paddingTop: '20px' }}>Floor {this.props.alldata.floorN}</h1>
        <p style={{ paddingLeft: '30px' }}>Problem: {this.props.alldata.problemList[this.props.alldata.selectNoti]} </p>
        <p style={{ paddingLeft: '30px' }}>Comments: {this.props.alldata.commentList[this.props.alldata.selectNoti]} </p>
        {/* <div className='allmachines' style={{ display: 'flex', justifyContent: 'center', height: '250px' }}> */}
          <div className='MachineArea' style={{ paddingTop: '20px', margin: 'auto' }}>
            <p style={{ textAlign: 'center' }}>{this.props.alldata.floorN}{this.props.alldata.machineN}</p>
            <img src={require('./Washer.png')} style={logoStyle} />
            <Buttons status={this.props.alldata.status[this.props.alldata.selectNoti][this.props.alldata.selectNoti]} updateDB={this.updateDB} machine={this.props.alldata.selectNoti} />
          </div>
        {/* </div> */}
        <br />
        <br />
        <br />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
          <Link to="/">
            <Button onClick={this.goBack} size="large" >
              Only Change Status
          </Button>
          </Link>

          <Button size="large" type="primary" >
            Resolved
          </Button>
          </div>
      </div>


    )

  }
}
export default Worder;