import React from 'react';
import { connect } from 'react-redux'


const App3 = (props) => {
    const {inputValue,list,addItem,inputChange,delectItem} = props;
    return (
        <div>
            <input
                value={inputValue}
                onChange={inputChange}
            />
            <button
                style={{ marginLeft: '10px' }}
                onClick={addItem}
            >
                添加服务</button>
            <ul>
                {
                    list.map((list, index) => {
                        return (
                            <li
                                key={list + index}
                                onClick={() => { return delectItem(index) }}
                            >
                                {list}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispath) => {
    return {
        inputChange(e) {
            const actions = { type: 'inputChange', value: e.target.value }
            dispath(actions);
        },
        addItem() {
            const actions = { type: 'addItem' };
            dispath(actions);
        },
        delectItem(index) {
            const actions = { type: 'delectItem', value: index };
            dispath(actions);
        }
    }
}

export default connect(stateToProps, dispatchToProps)(App3);