import React, { Component } from 'react';
import { Radio } from 'antd';

class Buttons extends Component {
  

  handleChange= (e) => {
    this.props.updateDB(e.target.value, this.props.machine)
}


  render() {
    return (
      <div className="App">
        <div className='select'>
        </div>
        <div>
          {/* {console.log('pro',this.props.problem)} */}
          <p>{this.props.status}</p>
          <Radio.Group value={this.props.status} onChange={this.handleChange} buttonStyle="solid" style={{ size: 'small', fontSize: '12px' }}>
            <Radio.Button value="OPEN" >OPEN</Radio.Button>
            <Radio.Button value="IU">IU</Radio.Button>
            <Radio.Button value="PENDING">PENDING</Radio.Button>
            <Radio.Button value="OUT OF ORDER">BROKEN</Radio.Button>
            
          </Radio.Group>
        </div>
      </div>

    );
  }
}

export default Buttons;
