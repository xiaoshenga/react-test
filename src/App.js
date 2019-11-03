import React, { Component } from 'react';
import FuItem from './components/fuwuItem'
import Test from './components/test'
// import { tsConstructorType } from '@babel/types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'hello',
      inputValue: '',
      list: ['头部按摩', '精油推背']
    }
    this.getRef = this.getRef.bind(this);
  }
  getRef(){
    console.log(this.test)
  }
  render() {
    return (
      <div className="App">
        <div>
          <input type="text" 
            onChange={this.inputChange.bind(this)} 
            value={this.state.msg} 
            ref={(input=>{this.input=input})}
          />
          <button onClick={this.add.bind(this)}>添加服务</button></div>
        <div>
          {this.state.list.map((list, index) =>
            <div key={list + index}>
              <FuItem content={list} index={index} delect={this.delect.bind(this)} />
            </div>
          )}</div>
        <div>
          <Test index={100} ref={test=>this.test=test} />
        </div>
        <button onClick={this.getRef}>获取ref</button>
      </div>
    )
  };
  inputChange(e) {
    this.setState({
      msg: this.input.value
    })
  }
  add() {
    this.setState({
      list: [...this.state.list, this.state.msg],
      msg: ''
    })
  }
  delect(index) {
    this.setState({
      list: this.state.list.filter((list, i) => i !== index)
    })
  }
}

export default App;
