import {INPUT_CHANGE,ADD,REMOVEE,GET_LIST} from './actionTypes'

const defaultState = {
    list:[],
    inputValue:''
}

export default (state=defaultState,action)=>{
    let {type,value} = action;
    if(type === INPUT_CHANGE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = value;
        return newState;
    }

    if(type === ADD){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(value);
        newState.inputValue = '';
        return newState;
    }

    if(type === REMOVEE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(value,1);
        return newState;
    }

    if(type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        console.log('请求的数据',action.data);
        return newState;
    }

    return state
}