import './App.css';
// import { useState } from 'react';
import { Component } from 'react';

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      counter : 0
    }
  }

  increase = ()=>{
    this.setState ({
      counter : this.state.counter + 1
    })   
  }

  dicrease = ()=>{
    this.setState ({
      counter :  this.state.counter - 1
      
    }) 
  }

  render(){
    return <center>  <div><h1>{this.state.counter}</h1> 
      <button onClick={this.dicrease}>-</button> &nbsp;&nbsp;&nbsp;
      <button onClick={this.increase}>+</button>

      </div>
      </center>
  }

}

export default Counter;
