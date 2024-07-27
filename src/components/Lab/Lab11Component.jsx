import React from 'react';

function Lab11Component() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Guía de Laboratorio N° 11</h1>
      <p><strong>Institución:</strong> Universidad Nacional del Centro del Perú</p>
      <p><strong>Programa de Estudios:</strong> Ingeniería de Sistemas</p>
      <p><strong>Asignatura:</strong> Desarrollo de Aplicaciones Web</p>
      <p><strong>Docente:</strong> Jaime Suasnábar Terrel</p>
      <p><strong>Semestre:</strong> IX</p>
      
      <h2 className="text-2xl font-semibold mt-6">I. OBJETIVO</h2>
      <p>Desarrollar aplicaciones dinámicas con Next JS.</p>
      
      <h2 className="text-2xl font-semibold mt-6">II. FUNDAMENTO TEÓRICO</h2>
      <p>Descripción del proceso de renderizado y Server-Side Rendering en Next JS, así como el uso de TypeScript.</p>

      <h2 className="text-2xl font-semibold mt-6">III. PRÁCTICA DE NEXT JS</h2>
      
      <h3 className="text-xl font-semibold mt-4">1. USO DE TYPESCRIPT EN NEXT JS</h3>
      <p>Implementación de un componente utilizando TypeScript en Next JS.</p>
      
      <h3 className="text-xl font-semibold mt-4">2. RENDERIZADO EN EL SERVIDOR</h3>
      <p>Desarrollar un componente que obtenga y muestre datos desde una API utilizando renderizado en el servidor.</p>
      
      <h3 className="text-xl font-semibold mt-4">3. APP ROUTER DE NEXT JS</h3>
      <p>Creación de componentes para un Layout y páginas individuales en una aplicación Next JS utilizando App Router.</p>

      <h3 className="text-xl font-semibold mt-4">4. BARRA DE NAVEGACIÓN AUTOMÁTICA</h3>
      <p>Generar opciones de navegación automáticamente desde un objeto.</p>
      
      <h2 className="text-2xl font-semibold mt-6">IV. EJERCICIOS DEL LABORATORIO</h2>

      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.1</h4>
      <p>Desarrollar un CRUD en Next JS con componentes de servidor y cliente con la API <a href="https://jsonplaceholder.typicode.com/posts">https://jsonplaceholder.typicode.com/posts</a>.</p>
      
      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.2</h4>
      <p>Desarrollar un CRUD en Next JS con componentes de servidor y cliente utilizando la API <a href="https://jsonplaceholder.typicode.com/posts">https://jsonplaceholder.typicode.com/posts</a>. Al ejercicio 11.1 agregar las funcionalidades de:</p>
      <ul>
        <li>Ordenación por cada campo de datos</li>
        <li>Búsqueda en el campo title</li>
        <li>Paginación de 8 en 8.</li>
      </ul>
      
      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.3</h4>
      <p>Al ejercicio 11.2 agregar las funcionalidades de:</p>
      <ul>
        <li>Un layout y componentes tipo panel de administración con header, aside, main y footer.</li>
      </ul>

      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.4</h4>
      <p>Al ejercicio 11.3 agregar las funcionalidades de:</p>
      <ul>
        <li>Sistema de Autenticación utilizando usuarios de la API <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a>. Para el nombre de usuario utilice el campo username igual para la contraseña.</li>
      </ul>
    </div>
  );
}

export default Lab11Component;