import React from 'react';

function Lab12Component() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Guía de Laboratorio N° 12</h1>
      <p><strong>Institución:</strong> Universidad Nacional del Centro del Perú</p>
      <p><strong>Programa de Estudios:</strong> Ingeniería de Sistemas</p>
      <p><strong>Asignatura:</strong> Desarrollo de Aplicaciones Web</p>
      <p><strong>Docente:</strong> Jaime Suasnábar Terrel</p>
      <p><strong>Semestre:</strong> IX</p>
      
      <h2 className="text-2xl font-semibold mt-6">I. OBJETIVO</h2>
      <p>Desarrollar aplicaciones backend con el Lenguaje JSP.</p>
      
      <h2 className="text-2xl font-semibold mt-6">II. FUNDAMENTO TEÓRICO</h2>
      <p>Descripción del Jakarta Server Pages (JSP), incluyendo sus elementos como Scriptlet, Declaraciones del JSP y JSP Expression.</p>
      
      <h2 className="text-2xl font-semibold mt-6">III. ELEMENTOS JSP</h2>
      <h3 className="text-xl font-semibold mt-4">Scriptlet</h3>
      <p>Un scriptlet puede contener cualquier número de declaraciones de JAVA, declaraciones variables, de métodos, o expresiones que sean válidas en el lenguaje de scripting de la página.</p>
      
      <h3 className="text-xl font-semibold mt-4">Declaraciones del JSP</h3>
      <p>Una declaración declara una o más variables o métodos que puede utilizar en el código Java más adelante en el archivo JSP.</p>
      
      <h3 className="text-xl font-semibold mt-4">JSP Expression</h3>
      <p>Un elemento de expresión de JSP contiene una expresión del lenguaje scripting que se evalúa, se convierte en elemento html, e insertada donde la expresión aparece en el archivo JSP.</p>
      
      <h2 className="text-2xl font-semibold mt-6">IV. EJERCICIOS DEL LABORATORIO</h2>
      
      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.1</h4>
      <p>Desarrollar un formulario con nombre, apellidos (input text), género (input radio), pasatiempos: fútbol, natación, lectura (input check). Capturar los datos y mostrarlos en otro archivo JSP mediante el método GET.</p>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana12/Ejercicio1">Ejercicio 12.1</a>
      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.2</h4>
      <p>Desarrollar un formulario con nombre, apellidos (input text), género (input radio), pasatiempos: fútbol, natación, lectura (input check). Capturar los datos y mostrarlos en otro archivo JSP mediante el método POST.</p>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana12/Ejercicio2">Ejercicio 12.2</a>
      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.3</h4>
      <p>Declarar un array multidimensional con los datos de 10 estudiantes y mostrarlos en un JSP que muestre una tabla estilizada con CSS.</p>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana12/Ejercicio3">Ejercicio 12.3</a>
      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.4</h4>
      <p>Desarrollar un CRUD completo en JSP con una base de datos en MySQL utilizando JDBC para una tabla de estudiantes.</p>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana12/Ejercicio4">Ejercicio 12.4</a>
    </div>
  );
}

export default Lab12Component;