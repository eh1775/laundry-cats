import React, { Component } from 'react';
import './App.css';
import { Icon } from 'antd';
import { HashRouter as Router,Route } from 'react-router-dom'
import Manager from './pages/Manager';
import Worder from './pages/Worder.js';
import Home from './pages/Home.js';

// const { Header, Footer, Content } = Layout;

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Manager',
    component: Manager
  },
  {
    path: '/Worder',
    component: Worder
  },

]

class App extends Component {
  // render() {

  //   return (
  //     <div>
  //       <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>

  //         <Link to="/">Home</Link>

  //         <Link to="/Manager">Manager Edit</Link>

  //         <Link to="/Worder">Work Order</Link>

  //       </Header>
  //       <div>
  //         <Content style={{ margin: '24px 16px 0' }}>
  //           <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
  //             {this.props.children}
  //           </div>
  //         </Content>
  //       </div>
  //       <div>
  //         <Footer style={{ textAlign: 'center' }}>LaundryCats ©2019 Created by Emily, Eszter, Kertu, and Selina</Footer>
  //       </div>


  //       {/* <ul>
  //         <li><Link to="/">Home</Link></li>
  //         <li><Link to="/Manager">Manager Edit</Link></li>
  //         <li><Link to="/Worder">Work Order</Link></li>
  //       </ul>
  //       {this.props.children} */}
  //     </div>

  //   );
  // }


  state = {
    showBack: false
  }
  componentDidMount() {
    window.addEventListener('hashchange', e => {
      this.setState({ showBack: e.newURL !== 'http://localhost:3000/#/' })
    })
  }
  goBack = () => {
    window.history.go(-1)
  }
  render() {
    const { showBack } = this.state
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
        <div style={{ background: 'white', height: 600, width: 400, border: '1px solid #ddd' }}>
          {!showBack ? null : (
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
              <div onClick={this.goBack}>
                <Icon type="left" /> &nbsp; Back
							</div>
            </div>
          )}
          <Router>
            <div>
              {routes.map((v, idx) => (
                <Route key={idx} path={v.path} component={v.component} exact />
              ))}
            </div>
          </Router>
        </div>
      </div>
    )
  }
}

export default App;