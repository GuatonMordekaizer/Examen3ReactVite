import React from 'react';

export function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-dark text-light mt-5">
            <div className="container-fluid">
                <div className="row py-4">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center">
                            <i className="bi bi-code-slash text-primary me-2 fs-4"></i>
                            <div>
                                <h6 className="mb-1 fw-bold">Todo List App</h6>
                                <small className="text-muted">
                                    Desarrollado con React, Vite y Bootstrap
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-md-end mt-3 mt-md-0">
                        <div className="mb-2">
                            <span className="badge bg-primary me-2">
                                <i className="bi bi-heart-fill me-1"></i>
                                Hecho con amor
                            </span>
                            <span className="badge bg-success">
                                <i className="bi bi-shield-check me-1"></i>
                                Open Source
                            </span>
                        </div>
                        <small className="text-muted d-block">
                            © {currentYear} Todo List Manager. Todos los derechos reservados.
                        </small>
                    </div>
                </div>
                
            </div>
        </footer>
    );
}
