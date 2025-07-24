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
      //  {id:1}, {id:2},{id:3},{id:4}
        {id:1, task:'Tarea 1'},
        {id:2, task:'Tarea 2'},
        {id:3, task:'Tarea 3'},
        {id:4, task:'Tarea 4'}
    ]);

    const taskRef = useRef();

    const agregarTarea = () => {
        console.log("AGREGANDO TAREA");
        const task = taskRef.current.value;
        
        if (task === '')return;

        setTodos((prevTodos) => {
            const newTask = {
                id:uuid(),   // para instalar esta función  npm install uuid  y se debe importar 
                task: task
            }
            return [...prevTodos,newTask]
        })

    }

    // todos es un arreglo (estado)  y setTodos es el metodo que me permitira cambiar el estado   

    return(

        <Fragment>
            <h1>Listado de Tareas</h1>
            <div className="input-group mt-4 mb-4">
                <input className="form-control" ref={taskRef} placeholder="Agregar Tarea" type="text"></input>
                <button onClick={agregarTarea} className="btn btn-success ms-2" >+</button>
            </div>

            <ul className="list-group">
                {todos.map((todo) =>(
                    <TodoItem todo={todo} key={todo.id}></TodoItem>
                ))}
            </ul>
         </Fragment>
    );
}
