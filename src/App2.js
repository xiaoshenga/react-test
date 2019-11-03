import React, { Component } from 'react'

import store from './store'
import {INPUT_CHANGE,ADD,REMOVEE,GET_SAGA_LIST} from './store/actionTypes'
// import {} from './store/actionDispaths'

import App2Ui from './App2Ui'

export default class App2 extends Component {
    constructor(props) {
        super(props);

        this.inputChange = this.inputChange.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);

        this.state = store.getState();
        store.subscribe(this.storeChange);
    }

    componentDidMount(){
        const actions = {type:GET_SAGA_LIST};
        store.dispatch(actions);
    }

    render() {
        return (
            <App2Ui
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                inputChange = {this.inputChange}
                add = {this.add}
                remove = {this.remove}
            />
        )
    }
    inputChange(e){
        const actions = {
            type:INPUT_CHANGE,
            value:e.target.value
        }
        store.dispatch(actions);
    }

    storeChange(){
        this.setState(store.getState());
    }
    add(e){
        if(!this.state.inputValue)return
        const actions = {
            type:ADD,
            value: this.state.inputValue
        }
        store.dispatch(actions);
    }
    remove(index){

        console.log(index);
        const actions = {
            type : REMOVEE,
            value: index
        }

        store.dispatch(actions)
    }
}