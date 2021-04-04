import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import {connect} from "react-redux";
import axios from "axios";
import {setTodo} from "../../store/actions/siteSettingsActions";

function Todo(props){
    const router = useRouter()
    const [todo,setTodo]= useState({})
    const [loading,setLoading] = useState(true)
    let id=router.query.id
    useEffect(()=>{
        let todo=props.siteSettings.todos.find(todo=>todo.id==id)
            if (todo){
                setTodo(props.siteSettings.todos.find(todo=>todo.id==id))
                setLoading(false)
            }else{
                if (id){
                    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>{
                        setTodo(res.data)
                        props.setTodo(res.data)
                        setLoading(false)
                    }).catch(err=>console.log(err))
                }

            }

    },[id])

    return(
     <div style={{display:'grid',placeItems:'center'}}>
         {
             loading?
                 <h1>
                     Loading...
                 </h1>
                 :
                 <div >
                     <h1>
                        Title : {todo.title}
                     </h1>
                     <p>ID : {todo.id}</p>
                     <p>Completed : {todo.completed?'Yes':'No'}</p>
                     <p>User Id : {todo.userId}</p>
                 </div>

         }
     </div>
    )
}
const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps,{setTodo}) (Todo)


