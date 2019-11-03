import Axios from "axios"
import {GET_LIST} from './actionTypes'


export const getTodoList = ()=>{
    return(dispath)=>{
        Axios.get('http://localhost:8880').then(res=>{
            let acitons = {type:GET_LIST,data:res.data}
            dispath(acitons)
        })
    }
}