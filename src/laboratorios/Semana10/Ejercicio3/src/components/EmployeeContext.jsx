import React, { createContext, useReducer, useEffect } from 'react';
import './EmployeeForm.css'
// Crear el contexto
export const EmployeeContext = createContext();

// Reducer
const employeeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [...state, action.payload];
    case 'REMOVE_EMPLOYEE':
      return state.filter(employee => employee.id !== action.payload);
    case 'UPDATE_EMPLOYEE':
      return state.map(employee => 
        employee.id === action.payload.id ? action.payload : employee
      );
    default:
      return state;
  }
};

// Proveedor del contexto
export const EmployeeProvider = ({ children }) => {
  const [employees, dispatch] = useReducer(employeeReducer, [], () => {
    const localData = localStorage.getItem('employees');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  return (
    <EmployeeContext.Provider value={{ employees, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};