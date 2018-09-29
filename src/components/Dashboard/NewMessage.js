import React from 'react';

const NewMessage = () => (
    <div className="card-cool">
        <div className="card-cool">
        <div className="card-header-cool">
            Nuevo mensaje
            <div className="icon-cool icon-dashboard-cool icon-dashboard-options"></div>
        </div>
        <div className="card-content-1">
            <input className="input-cool" placeholder="Título mensaje" />
            <textarea className="textarea-cool" defaultValue="Ingresa tu mensaje" />
            <button className="btn-msg-cool" onClick={e => e.preventDefault() }>Enviar mensaje</button>
        </div>
        </div>
    </div>
);

export default NewMessage;