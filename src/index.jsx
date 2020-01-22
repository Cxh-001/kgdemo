import React, { Component } from 'react';
import {Input } from 'antd'
import './index.css';

class mysearch extends Component {
  constructor(props) {
    super(props);
 
  }

  componentDidMount() {

  }
  
                    
  render() {
    return (
      <div className="main">
      <Input
      placeholder="input search text"

      />
       
      </div>
      
    );
  }
}

export default mysearch;
