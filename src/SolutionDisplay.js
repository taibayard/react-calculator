import React, { Component } from 'react';
import './App.css';

class SolutionDisplay extends Component {
  render() {
    return (
    	<h2>{this.props.value}</h2>
    );
  }
}

export default SolutionDisplay;
