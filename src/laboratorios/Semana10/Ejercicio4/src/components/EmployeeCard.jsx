import React from 'react';

const EmployeeCard = ({ employee, setEmployeeToView }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setEmployeeToView(null)}>&times;</span>
        <h2>Detalles del Empleado</h2>
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Nombre:</strong> {employee.name}</p>
        <p><strong>Dirección:</strong> {employee.address}</p>
        <p><strong>Ciudad:</strong> {employee.city}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;