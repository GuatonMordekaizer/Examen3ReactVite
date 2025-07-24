import React, { useState, useRef } from "react";
import { v4 as uuid } from 'uuid'
import { TodoItem } from "./TodoItem";
import { Fragment } from "react";


/*
export function TodoList(){
    return (<h1>Hola TODOList</h1>

        <>
        <h1>Listado de Tareas</h1>
            <ul>
                <li>Tarea1</li>
                <li>Tarea2</li>
                <li>Tarea3</li>
            </ul>
        </>

    );
}
*/

export function TodoList(){
    const [todos,setTodos] = useState([
     // todos es un arreglo (estado)  y setTodos es el metodo que me permitira cambiar el estado   
      //  {id:1}, {id:2},{id:3},{id:4}
        {id:1, task:'Tarea 1', completed:true},
        {id:2, task:'Tarea 2', completed:false},
        {id:3, task:'Tarea 3', completed:true},
        {id:4, task:'Tarea 4', completed:false}
    ]);

    const taskRef = useRef();

    const agregarTarea = () => {
        console.log("AGREGANDO TAREA");
        const task = taskRef.current.value;
        
        if (task === '')return;

        setTodos((prevTodos) => {
            const newTask = {
                id:uuid(),   // para instalar esta función  npm install uuid  y se debe importar 
                task: task,
                completed:false   //  para registrar si la tarea si se completo la tarea o se encuentra pendiente.

            }
            return [...prevTodos,newTask]
        })

    }

    const ResumenTareas = () =>{    //  COMPONENTE LOCAL Resumen Tarea
        const cant = cantidadTareas()
        if (cant == 0) {
            return(
                <div className="alert alert-success mt-3">
                    <h2>RESUMEN TAREAS </h2>
                    <h3>Felicitaciones no tienes tareas pendientes </h3>
                </div>
                )

        }
        
        if (cant == 1) {
            return(
                <div className="alert alert-info mt-3">
                    <h2>RESUMEN TAREAS </h2>
                    <h3>Queda solamente una tarea pendiente : {cant}</h3>
                </div>
                )

        }
      return(
                <div className="alert alert-info mt-3">
                    <h2>RESUMEN TAREAS </h2>
                    <h3>Tareas pendientes : {cant}</h3>
      </div>)

    }

    const cantidadTareas = () =>{
        return todos.filter((todo)=> !todo.completed).length;
    }

    const cambiarEstadoTarea = (id) => {
        console.log(id)      
         const newTodos = [...todos];  //   Hace una copia de elemento     
         const todo = newTodos.find((todo)=> todo.id === id)  
         todo.completed = !todo.completed;
         setTodos(newTodos)   
    }

    const eliminarTareasCompletadas=()=> {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }

   

    return(

        <Fragment>
            <h1>Listado de Tareas</h1>
            <div className="input-group mt-4 mb-4">
                <input className="form-control" ref={taskRef} placeholder="Agregar Tarea" type="text"></input>
                <button onClick={agregarTarea} className="btn btn-success ms-2" >+</button>
                <button onClick={eliminarTareasCompletadas} className="btn btn-danger ms-2" >-</button>
            </div>

            <ul className="list-group">
                {todos.map((todo) =>(
                    <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstadoTarea} ></TodoItem>
                ))}
            </ul>

             <ResumenTareas/> {/* Nuevo Compontente  "Local" */}
         </Fragment>
    );
}
