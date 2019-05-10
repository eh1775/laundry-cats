import React from 'react';
import Buttons from './Buttons';
import './manager.css';


var logoStyle = {
  width: '30px',
  height: '36px',
};

class Manager extends React.Component {

  updateDB = (e,num) => {
    this.props.updateDB(e,num)
  }

  render() {
    return (
      <div>
        <div style={{ height: '580px', overflow: 'auto' }}>

          <h1 style={{ paddingLeft: '30px', paddingTop: '20px', fontSize: '15px' }}>Floor 1</h1>
          <div className='allmachines' >
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[0][0]}</p>
              <img src={require('./Washer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[0][0]} updateDB={this.updateDB} machine='0'/>
            </div>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[1][1]}</p>
              <img src={require('./Dryer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[1][1]} updateDB={this.updateDB} machine='1'/>
            </div>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[2][2]}</p>
              <img src={require('./Washer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[2][2]} updateDB={this.updateDB} machine='2'/>
            </div>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[3][3]}</p>
              <img src={require('./Washer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[3][3]} updateDB={this.updateDB} machine='3'/>
            </div>
          </div>

          <h1 style={{ paddingLeft: '30px', paddingTop: '20px', fontSize: '15px' }}>Floor 2</h1>
          <div className='allmachines'>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[4][4]}</p>
              <img src={require('./Washer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[4][4]} updateDB={this.updateDB} machine='4'/>
            </div>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[5][5]}</p>
              <img src={require('./Dryer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[5][5]} updateDB={this.updateDB} machine='5'/>
            </div>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[6][6]}</p>
              <img src={require('./Washer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[6][6]} updateDB={this.updateDB} machine='6'/>
            </div>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[7][7]}</p>
              <img src={require('./Washer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[7][7]} updateDB={this.updateDB} machine='7'/>
            </div>
          </div>

          <h1 style={{ paddingLeft: '30px', paddingTop: '20px', fontSize: '15px' }}>Floor 3</h1>
          <div className='allmachines'>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[8][8]}</p>
              <img src={require('./Washer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[8][8]} updateDB={this.updateDB} machine='8'/>
            </div>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[9][9]}</p>
              <img src={require('./Washer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[9][9]} updateDB={this.updateDB} machine='9'/>
            </div>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[10][10]}</p>
              <img src={require('./Dryer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[10][10]} updateDB={this.updateDB} machine='10'/>
            </div>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[11][11]}</p>
              <img src={require('./Dryer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[11][11]} updateDB={this.updateDB} machine='11'/>
            </div>
          </div>

          <h1 style={{ paddingLeft: '30px', paddingTop: '20px', fontSize: '15px' }}>Floor 4</h1>
          <div className='allmachines'>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[12][12]}</p>
              <img src={require('./Dryer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[12][12]} updateDB={this.updateDB} machine='12'/>
            </div>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[13][13]}</p>
              <img src={require('./Washer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[13][13]} updateDB={this.updateDB} machine='13'/>
            </div>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[14][14]}</p>
              <img src={require('./Dryer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[14][14]} updateDB={this.updateDB} machine='14'/>
            </div>
            <div className='MachineArea'>
              <p style={{ textAlign: 'center' }}>{this.props.machinedata[15][15]}</p>
              <img src={require('./Washer.png')} style={logoStyle} />
              <Buttons status={this.props.statusdata[15][15]} updateDB={this.updateDB} machine='15'/>
            </div>
          </div>
          
        </div>
      </div>


    )

  }
}
export default Manager;