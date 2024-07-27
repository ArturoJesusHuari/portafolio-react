import React, { useContext, useState, useEffect } from 'react';
import { EmployeeContext } from './EmployeeContext';
import EmployeeForm from './EmployeeForm';
import EmployeeCard from './EmployeeCard';
import './EmployeeList.css';

const EmployeeList = () => {
  const { employees, dispatch } = useContext(EmployeeContext);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [employeeToView, setEmployeeToView] = useState(null);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(8);

  useEffect(() => {
    setFilteredEmployees(employees.filter(employee => 
      employee.name.toLowerCase().includes(filter.toLowerCase())
    ));
  }, [employees, filter]);

  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleEdit = (employee) => {
    setEmployeeToEdit(employee);
  };

  const handleDelete = (id) => {
    dispatch({ type: 'REMOVE_EMPLOYEE', payload: id });
  };

  const handleView = (employee) => {
    setEmployeeToView(employee);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleFilter = () => {
    setFilteredEmployees(employees.filter(employee => 
      employee.name.toLowerCase().includes(filter.toLowerCase())
    ));
  };

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredEmployees.length / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {employeeToEdit && <EmployeeForm employeeToEdit={employeeToEdit} setEmployeeToEdit={setEmployeeToEdit} />}
      {employeeToView && <EmployeeCard employee={employeeToView} setEmployeeToView={setEmployeeToView} />}
      <div>
        <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filtrar por nombre" />
      </div>
      <ul>
        {currentEmployees.map(employee => (
          <li key={employee.id}>
            <p>{employee.name}</p>
            <p>{employee.address}</p>
            <p>{employee.city}</p>
            <button id='editar' onClick={() => handleEdit(employee)}>Editar</button>
            <button id='eliminar' onClick={() => handleDelete(employee.id)}>Eliminar</button>
            <button id='ver' onClick={() => handleView(employee)}>Ver</button>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;