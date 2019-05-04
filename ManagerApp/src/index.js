import React from 'react';
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
// import createHistory from 'history/createBrowserHistory'
// import Home from './pages/Home.js';
// import Manager from './pages/Manager.js';
// import Worder from './pages/Worder.js';
import App from './App';
// const { Header } = Layout;
// const routing = (
//     <Router>

//         <div className='header'>
//             <Route exact path="/" component={App} />
//             <Route path="/Manager" component={Manager} />
//             <Route path="/Worder" component={Worder} />
//         </div>

//     </Router>
// )
// ReactDOM.render(routing, document.getElementById('root'))



// ReactDOM.render(
//     <Router>
//         <Switch>
//             <Route component={App}>
//                 <Route path='/' component={Home} />
//                 <Route path='/Manager' component={Manager} />
//                 <Route path='/Worder' component={Worder} />

//             </Route>
//         </Switch>
//     </Router>

//     , document.getElementById('root')
// );




// class App extends React.component {

//     render() {
//         <Router history={browserHistory}>
//             <Route path='/' component={App}>
//                 <IndexRoute component={Manager} />
//                 <Route path='Manager' component={Manager} />
//                 <Route path='Worder' component={Worder} />
//             </Route>
//         </Router>
//     }
// }

import 'antd/dist/antd.css'
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

