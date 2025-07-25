import React from 'react';

export function Header() {
    return (
        <header className="bg-primary text-white shadow-lg">
            <div className="container-fluid">
                <div className="row align-items-center py-3">
                    <div className="col-md-6">
                        <h1 className="h3 mb-0 fw-bold">
                            <i className="bi bi-check-circle-fill me-2"></i>
                            Todo List Manager
                        </h1>
                        <p className="mb-0 small opacity-75">Gestiona tus tareas de manera eficiente</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <div className="d-flex align-items-center justify-content-md-end">
                            <span className="badge bg-light text-primary me-2">
                                <i className="bi bi-calendar-date me-1"></i>
                                {new Date().toLocaleDateString('es-ES', { 
                                    weekday: 'long', 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                            </span>
                            <div className="vr mx-2 d-none d-md-block"></div>
                            <small className="opacity-75">
                                <i className="bi bi-lightning-fill me-1"></i>
                                Powered by React + Vite
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
