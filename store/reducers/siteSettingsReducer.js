import { GET_TODOS, INCREMENT, SET_TODO} from "../types/actionsType";

const init={
    counter:0,
    todos:[]
}

export default function siteSettingsReducer(state=init,action){
    switch (action.type){
        case INCREMENT:{

            return{
                ...state,
                counter:++state.counter
            }
        };

        case GET_TODOS:{
            return {
                ...state,
                todos:action.payload
            }
        };
        case SET_TODO:{
            return {
                ...state,
                todos:state.todos.push(action.payload)
            }
        }

        default: return state
    }
}
