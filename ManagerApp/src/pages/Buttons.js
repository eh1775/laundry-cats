import React, { Component } from 'react';
import './button.css';
import { Radio } from 'antd';

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bttn: [
        { 0: true },
        { 1: false },
        { 2: false },
        { 3: false }
      ],
      picked: 0,
      status: { 0: 'OPEN', 1: 'IN USE', 2: 'OUT OF ORDER', 3: 'PENDING' },
      state: ''
    }
  }

  handleClick(btn) {
    let items = [
      { 0: false },
      { 1: false },
      { 2: false },
      { 3: false }
    ];
    let item = !items[btn]
    items[btn] = item
    console.log(this.state.bttn)
    this.setState({
      picked: btn,
      bttn: items
    });
  }

  handleChange= (e) => {
    this.setState({ state: e.target.value });
}

  render() {
    let btn_class1 = this.state.bttn[0] ? "normalButton" : "clickedButton";
    let btn_class2 = this.state.bttn[1] ? "normalButton" : "clickedButton";
    let btn_class3 = this.state.bttn[2] ? "normalButton" : "clickedButton";
    let btn_class4 = this.state.bttn[3] ? "normalButton" : "clickedButton";
    return (
      <div className="App">
        <div className='select'>
          {/* <p>{this.state.status[this.state.picked]}</p> */}
        </div>
        <div>
          {/* <button className={btn_class1} onClick={() => this.handleClick(0)} style = {{marginRight: '3.95px'}}>OPEN</button>
          <button className={btn_class2} onClick={() => this.handleClick(1)} >IN USE</button>
          <button className={btn_class3} onClick={() => this.handleClick(2)}>OUT OF ORDER</button>
          <button className={btn_class4} onClick={() => this.handleClick(3)} style = {{width: '118.56px'}}>PENDING</button> */}

          <p>{this.state.state}</p>
          <Radio.Group onChange={this.handleChange} style={{ size: 'small', fontSize: '12px' }}>
            <Radio.Button value="OPEN">OPEN</Radio.Button>
            {/* <Radio.Button value="IN USE">IU</Radio.Button> */}
            <Radio.Button value="IN USE">IU</Radio.Button>
            <Radio.Button value="PENDING">PENDING</Radio.Button>
            <Radio.Button value="OUT OF ORDER">BROKEN</Radio.Button>
            
          </Radio.Group>
        </div>
      </div>

    );
  }
}

export default Buttons;
