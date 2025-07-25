import React, { useState, useRef } from "react";
import { v4 as uuid } from 'uuid'
import { TodoItem } from "./TodoItem";
import { Fragment } from "react";

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
        
        // Limpiar el input después de agregar
        taskRef.current.value = '';

    }

    // COMPONENTE INTERNO MEJORADO - ResumenTareas con estilos avanzados
    const ResumenTareas = () => {
        const cant = cantidadTareas();
        const totalTareas = todos.length;
        const completadas = totalTareas - cant;
        const porcentaje = totalTareas > 0 ? Math.round((completadas / totalTareas) * 100) : 0;
        
        if (cant == 0) {
            return(
                <div className="alert alert-success border-0 shadow-sm mt-4 rounded-3">
                    <div className="d-flex align-items-center">
                        <div className="me-3">
                            <i className="bi bi-trophy-fill text-warning fs-1"></i>
                        </div>
                        <div className="flex-grow-1">
                            <h4 className="alert-heading mb-2 fw-bold">
                                <i className="bi bi-check-circle-fill me-2"></i>
                                ¡Felicitaciones! 🎉
                            </h4>
                            <p className="mb-2">No tienes tareas pendientes. ¡Has completado todo!</p>
                            <div className="progress mb-2" style={{height: '8px'}}>
                                <div className="progress-bar bg-success" style={{width: '100%'}}></div>
                            </div>
                            <small className="text-muted">
                                <i className="bi bi-graph-up me-1"></i>
                                Progreso: 100% completado ({totalTareas} de {totalTareas} tareas)
                            </small>
                        </div>
                    </div>
                </div>
            )
        }
        
        if (cant == 1) {
            return(
                <div className="alert alert-warning border-0 shadow-sm mt-4 rounded-3">
                    <div className="d-flex align-items-center">
                        <div className="me-3">
                            <i className="bi bi-clock-fill text-primary fs-1"></i>
                        </div>
                        <div className="flex-grow-1">
                            <h4 className="alert-heading mb-2 fw-bold">
                                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                ¡Casi terminas!
                            </h4>
                            <p className="mb-2">Queda solamente <strong>1 tarea pendiente</strong></p>
                            <div className="progress mb-2" style={{height: '8px'}}>
                                <div className="progress-bar bg-warning" style={{width: `${porcentaje}%`}}></div>
                            </div>
                            <small className="text-muted">
                                <i className="bi bi-graph-up me-1"></i>
                                Progreso: {porcentaje}% completado ({completadas} de {totalTareas} tareas)
                            </small>
                        </div>
                    </div>
                </div>
            )
        }
        
        return(
            <div className="alert alert-info border-0 shadow-sm mt-4 rounded-3">
                <div className="d-flex align-items-center">
                    <div className="me-3">
                        <i className="bi bi-list-task text-info fs-1"></i>
                    </div>
                    <div className="flex-grow-1">
                        <h4 className="alert-heading mb-2 fw-bold">
                            <i className="bi bi-clipboard-data-fill me-2"></i>
                            Resumen de Tareas
                        </h4>
                        <p className="mb-2">Tienes <strong>{cant} tareas pendientes</strong> por completar</p>
                        <div className="progress mb-2" style={{height: '8px'}}>
                            <div className="progress-bar bg-info" style={{width: `${porcentaje}%`}}></div>
                        </div>
                        <div className="row text-center mt-3">
                            <div className="col-4">
                                <div className="d-flex flex-column">
                                    <span className="fs-5 fw-bold text-primary">{totalTareas}</span>
                                    <small className="text-muted">Total</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="d-flex flex-column">
                                    <span className="fs-5 fw-bold text-success">{completadas}</span>
                                    <small className="text-muted">Completadas</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="d-flex flex-column">
                                    <span className="fs-5 fw-bold text-warning">{cant}</span>
                                    <small className="text-muted">Pendientes</small>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted d-block mt-2">
                            <i className="bi bi-graph-up me-1"></i>
                            Progreso: {porcentaje}% completado
                        </small>
                    </div>
                </div>
            </div>
        )
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
            {/* Header de la sección con estilos mejorados */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="bg-white rounded-3 shadow-sm p-4 border-start border-primary border-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <h2 className="fw-bold text-primary mb-2">
                                    <i className="bi bi-list-check me-2"></i>
                                    Gestión de Tareas
                                </h2>
                                <p className="text-muted mb-0">
                                    Organiza y administra tus tareas diarias de manera eficiente
                                </p>
                            </div>
                            <div className="d-none d-md-block">
                                <div className="text-center">
                                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                                         style={{width: '60px', height: '60px'}}>
                                        <i className="bi bi-calendar-check fs-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Formulario de entrada mejorado */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="bg-white rounded-3 shadow-sm p-4">
                        <h5 className="fw-bold mb-3">
                            <i className="bi bi-plus-circle-fill text-success me-2"></i>
                            Agregar Nueva Tarea
                        </h5>
                        <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                                <i className="bi bi-pencil-fill text-muted"></i>
                            </span>
                            <input 
                                className="form-control border-start-0 ps-0" 
                                ref={taskRef} 
                                placeholder="Escribe tu nueva tarea aquí..." 
                                type="text"
                                onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
                            />
                            <button 
                                onClick={agregarTarea} 
                                className="btn btn-success px-4 fw-bold"
                                title="Agregar tarea"
                            >
                                <i className="bi bi-plus-lg me-2"></i>
                                Agregar
                            </button>
                            <button 
                                onClick={eliminarTareasCompletadas} 
                                className="btn btn-outline-danger px-4 fw-bold"
                                title="Eliminar tareas completadas"
                            >
                                <i className="bi bi-trash3-fill me-2"></i>
                                Limpiar
                            </button>
                        </div>
                        <small className="text-muted mt-2 d-block">
                            <i className="bi bi-info-circle me-1"></i>
                            Presiona Enter o haz clic en "Agregar" para crear una nueva tarea
                        </small>
                    </div>
                </div>
            </div>

            {/* Lista de tareas mejorada */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="bg-white rounded-3 shadow-sm p-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="fw-bold mb-0">
                                <i className="bi bi-list-ul text-primary me-2"></i>
                                Lista de Tareas
                            </h5>
                            <span className="badge bg-primary rounded-pill">
                                {todos.length} {todos.length === 1 ? 'tarea' : 'tareas'}
                            </span>
                        </div>
                        
                        {todos.length === 0 ? (
                            <div className="text-center py-5">
                                <i className="bi bi-inbox text-muted" style={{fontSize: '4rem'}}></i>
                                <h4 className="text-muted mt-3">No hay tareas</h4>
                                <p className="text-muted">¡Agrega tu primera tarea para comenzar!</p>
                            </div>
                        ) : (
                            <div className="list-group list-group-flush">
                                {todos.map((todo) =>(
                                    <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstadoTarea} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Componente interno ResumenTareas mejorado */}
            <div className="row">
                <div className="col-12">
                    <ResumenTareas/>
                </div>
            </div>
         </Fragment>
    );
}
