const defaultSate = {
    inputValue : '',
    list:[]
}

function reduecr(state = defaultSate,actions){
    const {type,value} = actions;
    if(type === 'inputChange'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = value;
        return newState
    }

    if(type === 'addItem'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.inputValue);
        newState.inputValue = '';
        return newState
    }

    if(type === 'delectItem'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(value,1);
        return newState;
    }
    return state
}

export default reduecr