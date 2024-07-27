import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Lab01Component() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Guía de Laboratorio N° 1</h1>
      <p><strong>Institución:</strong> Universidad Nacional del Centro del Perú</p>
      <p><strong>Programa de Estudios:</strong> Ingeniería de Sistemas</p>
      <p><strong>Asignatura:</strong> Desarrollo de Aplicaciones Web</p>
      <p><strong>Docente:</strong> Jaime Suasnábar Terrel</p>
      <p><strong>Semestre:</strong> IX</p>
      
      <h2 className="text-2xl font-semibold mt-6">I. OBJETIVO</h2>
      <p>Usar apropiadamente el Editor Visual Studio Code mediante el plugin Emmet y atajos de teclado de VSC.</p>
      
      <h2 className="text-2xl font-semibold mt-6">II. FUNDAMENTO TEÓRICO</h2>
      
      <h3 className="text-xl font-semibold mt-4">Plugin Emmet</h3>
      <p>Es una herramienta que encuentras de manera integrada en tu editor de código, para agilizar tu proceso de desarrollo al escribir código HTML y CSS, más rápido y ahorrándote errores tipográficos.</p>
      
      <h3 className="text-xl font-semibold mt-4">Etiquetas hermanos e hijos</h3>
      <p>Podemos especificar etiquetas hermanos e hijos usando los caracteres + y .</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`section+section
<section></section>
<section></section>

ul>li
<ul>
    <li></li>
</ul>`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Multiplicación de etiquetas</h3>
      <p>Podemos multiplicar etiquetas con *.</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`p*3
<p></p>
<p></p>
<p></p>

ul>li*3
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Agrupar etiquetas</h3>
      <p>Podemos agrupar para crear generadores complejos con {} o ()</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`nav#menu>ul.nav-menu>(li.nav-menu-items>a)*3`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Definir contenido</h3>
      <p>Usando corchetes puedes agregar contenido</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`h1{Hola}`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Clases</h3>
      <p>Para definir una clase junto con la etiqueta, simplemente agregar así:</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`div.wrapper
<div class="wrapper"></div>

h1.header.center
<h1 class="header center"></h1>`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">ID’s</h3>
      <p>Los Id funcionan de manera muy similar:</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`div#hero
<div id="hero"></div>`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Atributos</h3>
      <p>También podemos especificar atributos para las etiquetas:</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`img[src="cat.jpg"][alt="foto de gato"]
<img src="cat.jpg" alt="foto de gato" />`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Enumerar iteración $</h3>
      <p>Podemos numerar elementos en secuencia usando un signo de dólar ($).</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`ul>li{Item $}*3
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>`}
      </SyntaxHighlighter>
      <p>Incluso puede personalizar la secuencia de numeración rellenando con ceros, comenzando con un número específico e incluso en la dirección inversa.</p>
    </div>
  );
}

export default Lab01Component;