import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Lab04Component() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Guía de Laboratorio N° 4</h1>
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
      
      <h2 className="text-2xl font-semibold mt-6">III. PRÁCTICA DE JAVASCRIPT</h2>
      
      <h3 className="text-xl font-semibold mt-4">1. VARIABLES CON LET</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`let producto = "Escritorio";
// producto = "Estante";
// producto = 300;
console.log(producto);

let precio;
precio = 1000;
console.log(precio);`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">2. CONSTANTES</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`const producto1 = "Escritorio";
// producto1 = "Estante";
console.log(producto1);

const precio1;
precio1 = 1000;
console.log(precio1);`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">3. TIPOS DE DATOS</h3>
      
      <h4 className="text-lg font-semibold mt-4"># Undefined</h4>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`let producto;
console.log(producto);
console.log(typeof producto);`}
      </SyntaxHighlighter>
      
      <h4 className="text-lg font-semibold mt-4"># Strings o Cadenas de Texto</h4>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`let empleado = "Jaime";
console.log(empleado);
console.log(typeof empleado);

const producto = 'Monitor 19 Pulgadas';
console.log(producto);
console.log(typeof producto);`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">4. Numbers</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`const numero = 10.35;
const numero2 = 400;
const numero3 = -300;
const numero4 = "20";

console.log(typeof numero);
console.log(typeof numero2);
console.log(typeof numero3);`}
      </SyntaxHighlighter>
      
      <h2 className="text-2xl font-semibold mt-6">IV. EJERCICIOS DEL LABORATORIO</h2>
      <h3 className="text-xl font-semibold mt-4">Utilizando Spread Operator</h3>
      
      <h4 className="text-lg font-semibold mt-4">Ejercicio 4.1</h4>
      <p>Descomponer el siguiente array:</p>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`const alfabeto = ["a", "b", "c", "d", "e"];

// Si lo sacamos expandido en consola:
console.log(...alfabeto); // a b c d e`}
      </SyntaxHighlighter>
      
      <h4 className="text-lg font-semibold mt-4">Ejercicio 4.2</h4>
      <p>Copiar un array:</p>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`const array1 = ["A", "B", "C"];
const array2 = [...array1];
console.log(array1);
console.log(array2);`}
      </SyntaxHighlighter>
      
      <h4 className="text-lg font-semibold mt-4">Ejercicio 4.3</h4>
      <p>Unir 2 arrays:</p>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`const array1 = ["A", "B", "C"];
const array2 = ["D", "E", "F"];
const array3 = [...array1, ...array2];
console.log(array3);`}
      </SyntaxHighlighter>
      
      <h4 className="text-lg font-semibold mt-4">Ejercicio 4.4</h4>
      <p>Expandir un String en sus caracteres individuales:</p>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`console.log([..."Texto"]); // ["T", "e", "x", "t", "o"]`}
      </SyntaxHighlighter>
      
    </div>
  );
}

export default Lab04Component;