import React, { Component } from 'react';
import './button.css';

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bttn: [
        { 0: false },
        { 1: false },
        { 2: false }
      ],
      picked: false,
      status: { 0: 'OPEN', 1: 'IN USE', 2: 'OUT OF ORDER' }
    }
  }

  handleClick(btn) {
    let items = [
      { 0: false },
      { 1: false },
      { 2: false }
    ];
    let item = !items[btn]
    items[btn] = item
    
    this.setState({
      picked: btn,
      bttn: items
    });
  }

  render() {
    let btn_class1 = this.state.bttn[0] ? "normalButton" : "clickedButton";
    let btn_class2 = this.state.bttn[1] ? "normalButton" : "clickedButton";
    let btn_class3 = this.state.bttn[2] ? "normalButton" : "clickedButton";

    return (
      <div className="App">
        <div className='select'>
          <p>{this.state.status[this.state.picked]}</p>
        </div>
      <div>
          <button className={btn_class1} onClick={() => this.handleClick(0)}>OPEN</button>
          <button className={btn_class2} onClick={() => this.handleClick(1)}>IN USE</button>
          <button className={btn_class3} onClick={() => this.handleClick(2)}>OUT OF ORDER</button>
        </div>
        </div>

    );
  }
}

export default Buttons;
