import React, { useContext, useState } from 'react';
import { EmployeeContext } from './EmployeeContext';
import EmployeeForm from './EmployeeForm';
import './EmployeeList.css'

const EmployeeList = () => {
  const { employees, dispatch } = useContext(EmployeeContext);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  const handleEdit = (employee) => {
    setEmployeeToEdit(employee);
  };

  const handleDelete = (id) => {
    dispatch({ type: 'REMOVE_EMPLOYEE', payload: id });
  };

  return (
    <div>
      {employeeToEdit && <EmployeeForm employeeToEdit={employeeToEdit} setEmployeeToEdit={setEmployeeToEdit} />}
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <p>{employee.name}</p>
            <p>{employee.address}</p>
            <p>{employee.city}</p>
            <button id='editar' onClick={() => handleEdit(employee)}>Editar</button>
            <button id='eliminar' onClick={() => handleDelete(employee.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;