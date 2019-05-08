import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'antd';

import firebase from 'firebase';
import { firebase_config } from '../firebase_config.js'
firebase.initializeApp(firebase_config);
const database = firebase.database();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      comlist: []
    }
  }
  componentDidMount() {
    let reference = database.ref('Facility Request');
    reference.on("child_added", (newData) => {
      console.log(newData.val())
      this.setState({
        data: this.state.data.concat([[newData.val().comments, newData.val().floor, newData.val().machine, newData.val().problem]])
      })
      console.log(this.state.data)
    })
  }

  renderList() {
    // dummyData, we aim to replace this with data that is
    // passed down from App.js as a prop
    // let dummyData = this.state.data;

    // if (index!= 0){
    //   this.renderList(index-1)
    // return ([<Link to="/Worder">
    //   <Button size="large" block>
    //     Facility Request {this.state.data[index-1][1]}    {this.state.data[index-1][2]}   11:23 AM
    // </Button>
    //  </Link>])
    // }
    // else{
    //   return
    // }

    // for (var i = 0; i < this.state.data.length; i++) {
    //   console.log(i)
    //   comlist.concat([<Link to="/Worder">
    //     <Button size="large" block>
    //       Facility Request {this.state.data[i][1]}    {this.state.data[i][2]}   11:23 AM
    // 	</Button>
    //   </Link>])

    // }
    // console.log(comlist)
    // return comlist;

    // here we use the .map() method to create list elements
    // return dummyData.map((dataItem, index) => {
    //   return <li key={index}>{dataItem}</li>;
    // });

    // <Link to="/Worder">
    //     <Button size="large" block>
    //       Facility Request {noti[1]}     11:23 AM
    //     </Button>
    //   </Link>
  }

  render() {
    return (
      <div style={{ padding: 30, paddingTop: 140 }}>
        <h1>Welcome to FacilityRequest</h1>
        <Link to="/Manager">
          <Button size="large" type="primary" block>
            Change Status
					</Button>
          <br />
          <br />
        </Link>
        {/* <Link to="/Worder">
          <Button size="large" block>
            Facility Request   F2 #4   11:23 AM
				    </Button>
        </Link>
        <Button size="large" block>
          Facility Request   F3 #8  10:05 AM
				</Button>
        <Button size="large" block>
          Facility Request   F6 #14 07:22 AM
				</Button> */}

        <div>
          {
            this.state.data.map(noti => <div>
              <Link to="/Worder">
                <Button size="large" block>
                  Facility Request&nbsp;{noti[1]} &nbsp; {noti[2]} &nbsp;  11:23 AM
                </Button>
              </Link>
            </div>)
          }
        </div>

        <footer style={{ textAlign: 'center', height: '30px', marginTop: '160px' }} >LaundryCats ©2019 Created by
        Kertu, Selina, Emily, and Eszter</footer>
      </div>
    );
  }
}

export default App;