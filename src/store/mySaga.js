import {GET_SAGA_LIST,GET_LIST} from './actionTypes'
import {takeEvery,put} from 'redux-saga/effects'
import axios from 'axios'

export default function * mySaga(){
    yield takeEvery(GET_SAGA_LIST,getList)
}

function * getList(){
    const res = yield axios.get('http://localhost:8880');
    console.log(res);
    const actions = {type:GET_LIST,data:res.data};
    yield put(actions);
}