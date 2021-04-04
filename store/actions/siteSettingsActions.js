import {GET_TODOS, INCREMENT, SET_TODO} from "../types/actionsType";
import axios from "axios";

export const increment=()=>dispatch=>{
    dispatch({
        type:INCREMENT,
        payload:''
    })

}

export const getTodos=(data)=>dispatch=>{
    dispatch({
            type:GET_TODOS,
            payload:data
        })
}

export const setTodo=(data)=>dispatch=>{
    dispatch({
        type:SET_TODO,
        payload:data
    })
}
