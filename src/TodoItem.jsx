import React from "react";

export function TodoItem({todo, cambiarEstado}){
    const {id,task,completed} = todo;

    const fnCambiarEstado = () =>{
        cambiarEstado(id);
    }

    return (
        <div className={`list-group-item border-0 py-3 ${completed ? 'bg-light' : ''}`}>
            <div className="d-flex align-items-center">
                <div className="form-check me-3">
                    <input 
                        type="checkbox" 
                        onChange={fnCambiarEstado} 
                        checked={completed} 
                        className="form-check-input"
                        id={`task-${id}`}
                        style={{transform: 'scale(1.2)'}}
                    />
                </div>
                
                <div className="flex-grow-1">
                    <label 
                        htmlFor={`task-${id}`} 
                        className={`form-check-label mb-0 cursor-pointer ${
                            completed 
                                ? 'text-decoration-line-through text-muted' 
                                : 'text-dark fw-medium'
                        }`}
                        style={{fontSize: '1.1rem'}}
                    >
                        {task}
                    </label>
                </div>
                
                <div className="ms-3">
                    {completed ? (
                        <span className="badge bg-success rounded-pill">
                            <i className="bi bi-check-circle-fill me-1"></i>
                            Completada
                        </span>
                    ) : (
                        <span className="badge bg-warning text-dark rounded-pill">
                            <i className="bi bi-clock-fill me-1"></i>
                            Pendiente
                        </span>
                    )}
                </div>
            </div>
            
            {/* Línea separadora sutil */}
            <hr className="my-0 mt-3 opacity-25" />
        </div>
    );
}