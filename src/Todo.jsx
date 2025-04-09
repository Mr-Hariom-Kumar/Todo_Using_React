import uuid from 'uuid-random';
import { useState } from "react";
import "./todo.css";
export default function Todo(){
    let [addTask,setTask]=useState([{Task:"Sample Task",id:uuid(),isUP:false,isDone:false}]);
    let [isDone, setDone]=useState(false);
    let[updateTask,setUpdatedTask]=useState("");

    let pushTask=()=>{
        setTask((prevTask)=>{
            return [...prevTask,{Task:updateTask,id:uuid(),isDone:false}]
        })
    }
    let updatedTask=(event)=>{
        setUpdatedTask(event.target.value)
    }
    let del=(id)=>{
        setTask(addTask.filter((el)=>{
            if(el.id!==id) return el
        }))
    }

    let styles={
        height:"30px",
        width:"500px",
        padding:"10px",
        border:"2px solid violet"
    }
    let TaskStyle={
        padding:"0px",
        width:"80%",
        textAlign:"center",
        margin:"0 auto"
        
    }
    let divStyle={
        height:"20px",
        width:"20px",
        border:"2px solid white",
        marginLeft:"20px"
    }

    let  upperCased=()=>{
        setTask(addTask.map((el)=>{
            if(el.isUP){
                return {...el,Task:el.Task.toLowerCase(),isUP:false}
                
            }else{
                return  {...el,Task:el.Task.toUpperCase(),isUP:true}
            }
           
        }))
    }
   let doneHandle=(id)=>{
        setTask((prev)=>
            prev.map((el)=>
                el.id===id? {...el,isDone:true}:{...el}
            )  
        )
   }
    
    return (
        <>
            <input type="text" placeholder="add your task here..." onChange={updatedTask} style={styles}></input>
            <br></br><br></br>
            <button onClick={pushTask}>Add Task</button>
            <br></br><br></br>
            <br></br><br></br>
            <hr></hr>
            <div className="Task" style={TaskStyle}>
                <ul>
                    {
                        addTask.map((el)=>(
                            <li key={addTask.id}><span style={el.isDone?{textDecorationLine:"line-through"}:{}}> {el.Task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>del(el.id)}>Delete</button>
                            <input onChange={()=>doneHandle(el.id)}type='checkBox' style={divStyle}></input>
                            </li>
                            
                        ))
                    }
                </ul>
                <button onClick={upperCased}>ChangeCase</button>
                
            </div>
            
        </>
    )
}