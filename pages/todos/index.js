import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from "axios";
import {connect} from "react-redux";
import {getTodos} from "../../store/actions/siteSettingsActions";


function Todos(props){
    const [todos,setTodos]= useState([])
    const [loading,setLoading] = useState(true)
    const router = useRouter()
    useEffect(()=>{
        if (props.siteSettings.todos.length>0){
            setTodos(props.siteSettings.todos)
            setLoading(false)
        }else{
            axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
              setTodos(res.data)
                props.getTodos(res.data)
              setLoading(false)
          }).catch(err=>console.log(err))

        }
        },[])
    return(
        <div>
            <h1 style={{textAlign:'center'}}>
                Todos
            </h1>
            {
                loading?
                <div  style={{textAlign:'center'}}>Loading.....</div>
                    :
                    todos.map((todo,index)=>(
                            <div  onClick={()=>router.push(`/todos/${todo.id}`)} key={todo.id} style={{padding:'10px 50px',cursor:'pointer'}}>
                                {index+1} {todo.title}
                            </div>
                        ))
            }
        </div>


)
}
const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps,{getTodos}) (Todos)

