import React, { Component } from 'react';
import { Button, Radio } from 'antd';


class AntButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            state: ''
        }
    }

    // componentDidMount() {
    //     let reference = database.ref('Machine Status');
    //     reference.on("child_added", (newData) => {
    //       // console.log(newData.val())
    //       let a = [[newData.val().comments, newData.val().floor, newData.val().machine, newData.val().problem, newData.val().subtime]];
    //       this.setState({
    //         data: a.concat(this.state.data)
    //       })
    //       // console.log(this.state.data)
    //     })

    handleChange= (e) => {
        this.setState({ state: e.target.value });
    }

    render() {
        return (
            <div>
                <p>{this.state.state}</p>
                <Radio.Group onChange={this.handleChange} style={{size: 'small', fontSize: '12px'}}>
                    <Radio.Button value="OPEN">OPEN</Radio.Button>
                    {/* <Radio.Button value="IN USE">IU</Radio.Button> */}
                    <Radio.Button value="PENDING">PENDING</Radio.Button>
                    <Radio.Button value="OUT OF ORDER">BROKEN</Radio.Button>
                </Radio.Group>
            </div>
        )
    }
}

export default AntButton;
