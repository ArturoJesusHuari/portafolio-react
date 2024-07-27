import React, { useState, useContext, useEffect } from 'react';
import { EmployeeContext } from './EmployeeContext';

const EmployeeForm = ({ employeeToEdit, setEmployeeToEdit }) => {
  const { dispatch } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    address: '',
    city: ''
  });

  useEffect(() => {
    if (employeeToEdit) {
      setEmployee(employeeToEdit);
    } else {
      setEmployee({
        id: '',
        name: '',
        address: '',
        city: ''
      });
    }
  }, [employeeToEdit]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeToEdit) {
      dispatch({ type: 'UPDATE_EMPLOYEE', payload: employee });
      setEmployeeToEdit(null);
    } else {
      dispatch({ type: 'ADD_EMPLOYEE', payload: { ...employee, id: Date.now() } });
    }
    setEmployee({
      id: '',
      name: '',
      address: '',
      city: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        type="text"
        name="address"
        value={employee.address}
        onChange={handleChange}
        placeholder="Dirección"
        required
      />
      <input
        type="text"
        name="city"
        value={employee.city}
        onChange={handleChange}
        placeholder="Ciudad"
        required
      />
      <button id="agregar" type="submit">
        {employeeToEdit ? 'Actualizar Empleado' : 'Agregar Empleado'}
      </button>
    </form>
  );
};

export default EmployeeForm;