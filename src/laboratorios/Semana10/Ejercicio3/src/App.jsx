import React from 'react';
import { EmployeeProvider } from './components/EmployeeContext.jsx';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm.jsx';

function App() {
  return (
    <EmployeeProvider>
      <div className="App">
        <h1>Gestión de Empleados</h1>
        <EmployeeForm />
        <EmployeeList />
      </div>
    </EmployeeProvider>
  );
}

export default App;