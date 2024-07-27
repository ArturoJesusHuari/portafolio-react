import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Lab05Component() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Guía de Laboratorio N° 5</h1>
      <p><strong>Institución:</strong> Universidad Nacional del Centro del Perú</p>
      <p><strong>Programa de Estudios:</strong> Ingeniería de Sistemas</p>
      <p><strong>Asignatura:</strong> Desarrollo de Aplicaciones Web</p>
      <p><strong>Docente:</strong> Jaime Suasnábar Terrel</p>
      <p><strong>Semestre:</strong> IX</p>
      
      <h2 className="text-2xl font-semibold mt-6">I. OBJETIVO</h2>
      <p>Desarrollar aplicaciones dinámicas con JavaScript.</p>
      
      <h2 className="text-2xl font-semibold mt-6">II. FUNDAMENTO TEÓRICO</h2>
      
      <h3 className="text-xl font-semibold mt-4">JavaScript</h3>
      <p>JavaScript es un lenguaje de programación script dinámico, multi-paradigma, basado en prototipos, que soporta estilos de programación funcional, orientada a objetos e imperativa.</p>
      
      <h3 className="text-xl font-semibold mt-4">Evolución de JavaScript</h3>
      <p>El estándar de JavaScript es ECMAScript. Desde el 2012, todos los navegadores modernos soportan completamente ECMAScript 5.1. Los navegadores más antiguos soportan por lo menos ECMAScript 3. El 17 de julio de 2015, ECMA International publicó la sexta versión de ECMAScript, oficialmente llamada ECMAScript 2015, o ES6. Desde entonces, los estándares ECMAScript están en ciclos de lanzamiento anuales. Esta documentación se refiere a la última versión del borrador, que actualmente es ECMAScript 2019.</p>
      
      <h3 className="text-xl font-semibold mt-4">Motores de JavaScript</h3>
      <ul className="list-disc pl-5">
        <li>SpiderMonkey (Mozilla)</li>
        <li>V8 (Google)</li>
        <li>SquirrelFish (Safari)</li>
        <li>Carakan (Opera)</li>
      </ul>
      <p>Guía de referencia JavaScript</p>
      
      <h2 className="text-2xl font-semibold mt-6">III. EJERCICIOS DEL LABORATORIO</h2>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 5.1</h3>
      <p>Diseñar una página web para manipular el DOM con un botón.</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<h3 class="titulo">Ejercicio 01: Manipular el HTML con un click</h3>
<p id="parrafo1">Texto1</p>
<button type="button" onclick="modificandoDom()" class="btn success">Hacer Click!</button>
<script>
    function modificandoDom() {
        let parrafo1 = document.getElementById('parrafo1');
        parrafo1.innerHTML = 'Cambiando el DOM ' + Date();
    }
</script>`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 5.2</h3>
      <p>Desarrollar una aplicación para manipular el DOM con addEventListener, mostrando la reactividad de JavaScript mediante un input text y un párrafo.</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<h3 class="titulo">Ejercicio 02: Manipular el HTML con un AddEventListener</h3>
<form action="">
    <label for="">Ingrese un texto:</label>
    <input type="text" name="" id="idinput">
    <p id="idparrafo">Texto2</p>
</form>
<script>
    let txt = document.getElementById("idinput");
    txt.addEventListener("keyup", cambiandoParrafo);
    function cambiandoParrafo() {
        let parrafo1 = document.getElementById("idparrafo");
        parrafo1.innerHTML = txt.value;
    }
</script>`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 5.3</h3>
      <p>Desarrollar una aplicación para obtener y manipular datos del DOM, mostrando un formulario con 2 input text para el ingreso de números y mostrar el resultado de la suma.</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<h3 class="titulo">Ejercicio 03: Manipular el HTML con un AddEventListener</h3>
<form action="">
    <label for="field1">X</label> <input id="num1" type="text" value="">
    <label for="field2">Y</label> <input id="num2" type="text" value="">
    <button type="button" onclick="calculateSum()" class="btn danger">Sumar</button>  
    <p id="sumando">Result:</p>
</form>
<script>
function calculateSum() {
    let x, y, suma, text;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
        text = "Es necesario introducir dos números válidos";  
    } else {  
        suma = parseFloat(x) + parseFloat(y);  
        text = suma;  
    }  
    document.getElementById("sumando").innerHTML = "Result: " + text;  
}
</script>`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 5.4</h3>
      <p>Desarrollar una aplicación que muestre una tabla con 10 datos de estudiantes: id, apellidos, nombres, dirección y teléfono. Crear un array con 10 objetos y manipular los datos del DOM para mostrar los datos del array.</p>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`const estudiantes = [
    { id: 1, apellidos: "Pérez", nombres: "Juan", direccion: "Av. Principal 123", telefono: "987654321" },
    { id: 2, apellidos: "García", nombres: "Ana", direccion: "Calle Secundaria 456", telefono: "976543210" },
    // ... (8 objetos más)
];

function mostrarEstudiantes() {
    let tabla = '<table><tr><th>ID</th><th>Apellidos</th><th>Nombres</th><th>Dirección</th><th>Teléfono</th></tr>';
    estudiantes.forEach(estudiante => {
        tabla += \`<tr>
            <td>\${estudiante.id}</td>
            <td>\${estudiante.apellidos}</td>
            <td>\${estudiante.nombres}</td>
            <td>\${estudiante.direccion}</td>
            <td>\${estudiante.telefono}</td>
        </tr>\`;
    });
    tabla += '</table>';
    document.getElementById('tablaEstudiantes').innerHTML = tabla;
}

window.onload = mostrarEstudiantes;
`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 5.5</h3>
      <p>Desarrollar una aplicación orientada a objetos que muestre una tabla con 10 datos de estudiantes: id, apellidos, nombres, dirección y teléfono. Crear un array con 10 objetos y manipular los datos del DOM para mostrar los datos del array.</p>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`class Estudiante {
    constructor(id, apellidos, nombres, direccion, telefono) {
        this.id = id;
        this.apellidos = apellidos;
        this.nombres = nombres;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}

const estudiantes = [
    new Estudiante(1, "Pérez", "Juan", "Av. Principal 123", "987654321"),
    new Estudiante(2, "García", "Ana", "Calle Secundaria 456", "976543210"),
    // ... (8 objetos más)
];

function mostrarEstudiantes() {
    let tabla = '<table><tr><th>ID</th><th>Apellidos</th><th>Nombres</th><th>Dirección</th><th>Teléfono</th></tr>';
    estudiantes.forEach(estudiante => {
        tabla += \`<tr>
            <td>\${estudiante.id}</td>
            <td>\${estudiante.apellidos}</td>
            <td>\${estudiante.nombres}</td>
            <td>\${estudiante.direccion}</td>
            <td>\${estudiante.telefono}</td>
        </tr>\`;
    });
    tabla += '</table>';
    document.getElementById('tablaEstudiantes').innerHTML = tabla;
}

window.onload = mostrarEstudiantes;
`}
      </SyntaxHighlighter>
      
    </div>
  );
}

export default Lab05Component;