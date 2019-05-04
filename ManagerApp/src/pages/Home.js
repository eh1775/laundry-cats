import React from 'react';

import { Link } from 'react-router-dom'

import { Button } from 'antd'

class App extends React.Component {
    
    render() {
      return (
        <div style={{ padding: 30, paddingTop: 200 }}>
                <h1>Welcome</h1>
				<Link to="/Manager">
					<Button size="large" type="primary" style={{margin:30}}>
						Edit
					</Button>
				</Link>
                <Link to="/Worder">
                    <Button size="large" style={{margin:30}}>
                        Facility Request
				    </Button>
                </Link>
			</div>
      );
    }
  }
   
  export default App;