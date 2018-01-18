import React, { Component } from 'react';
import './App.css';
import SolutionDisplay from './SolutionDisplay.js';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentEquation:""
        }
    }
    addNum(e) {
      if(!(e.target.innerText === "0" && this.state.currentEquation === "")){
        this.setState({
            currentEquation: this.state.currentEquation + e.target.innerText
        });
      }
    }
    addOp(e){
      switch(this.state.currentEquation.toString().slice(-1)){
        case  "+":
        case  "-":
        case  "÷":
        case  "x":
        break;
        default:
            this.setState({
                currentEquation: this.state.currentEquation + e.target.innerText
            });
        break;
      }
    }
    solveEquation(){
      let x = this.state.currentEquation;
      x=x.replace(/x/g, "*");
      x=x.replace(/÷/g, "/");
      this.setState({
          currentEquation: eval(x)
      });
    }
  render() {
    return (
      <div className="App">
        <div className="solution-wrapper">
          <SolutionDisplay value={this.state.currentEquation} />
        </div>
        <div className="numbers-wrapper">
          <ul className="numbers-list">
            <li onClick={(e) => this.addNum(e)} className="number-tile">1</li>
            <li onClick={(e) => this.addNum(e)} className="number-tile">2</li>
            <li onClick={(e) => this.addNum(e)} className="number-tile">3</li>
            <li onClick={(e) => this.addNum(e)} className="number-tile">4</li>
            <li onClick={(e) => this.addNum(e)} className="number-tile">5</li>
            <li onClick={(e) => this.addNum(e)} className="number-tile">6</li>
            <li onClick={(e) => this.addNum(e)} className="number-tile">7</li>
            <li onClick={(e) => this.addNum(e)} className="number-tile">8</li>
            <li onClick={(e) => this.addNum(e)} className="number-tile">9</li>
            <li onClick={(e) => this.addNum(e)} className="number-tile">0</li>
          </ul>
        </div>
        <div className ="operators-wrapper">
          <ul className="operators-list">
            <li onClick={(e) => this.addOp(e)} className="operator">÷</li>
            <li onClick={(e) => this.addOp(e)} className="operator">x</li>
            <li onClick={(e) => this.addOp(e)} className="operator">-</li>
            <li onClick={(e) => this.addOp(e)} className="operator">+</li>
            <li onClick={(e) => this.solveEquation()} className="operator">=</li>
          </ul>
        </div>
      </div>

    );
  }
}

export default App;
