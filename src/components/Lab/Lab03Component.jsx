import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Lab03Component() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Guía de Laboratorio N° 3</h1>
      <p><strong>Institución:</strong> Universidad Nacional del Centro del Perú</p>
      <p><strong>Programa de Estudios:</strong> Ingeniería de Sistemas</p>
      <p><strong>Asignatura:</strong> Desarrollo de Aplicaciones Web</p>
      <p><strong>Docente:</strong> Jaime Suasnábar Terrel</p>
      <p><strong>Semestre:</strong> IX</p>
      
      <h2 className="text-2xl font-semibold mt-6">I. OBJETIVO</h2>
      <p>Usar y personalizar librerías de código CSS para el diseño responsive y para el diseño de componentes de una página web.</p>
      
      <h2 className="text-2xl font-semibold mt-6">II. FUNDAMENTO TEÓRICO</h2>
      
      <h3 className="text-xl font-semibold mt-4">Frameworks CSS</h3>
      <p>Un framework de CSS es una biblioteca de estilos genéricos que puede ser usada para implementar diseños web. Aportan una serie de utilidades y componentes.</p>
      
      <h3 className="text-xl font-semibold mt-4">Bootstrap CSS</h3>
      <p>Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS.</p>
      
      <h3 className="text-xl font-semibold mt-4">Guía de referencia Bootstrap CSS</h3>
      <p>Referencia Bootstrap</p>
      
      <h2 className="text-2xl font-semibold mt-6">III. EJERCICIOS DEL LABORATORIO</h2>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 3.1</h3>
      <p>Diseñar una página web responsive con Bootstrap que contenga una fila y 12 columnas para pantallas sm, md, lg, xl y xxl. Según la siguiente figura. imagen</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <title>Bootstrap Grid Example</title>
</head>
<body>

<div class="container">
  <div class="row">
    <div class="col-sm-1">1</div>
    <div class="col-sm-11">11</div>
  </div>
  <div class="row">
    <div class="col-md-2">2</div>
    <div class="col-md-10">10</div>
  </div>
  <div class="row">
    <div class="col-lg-3">3</div>
    <div class="col-lg-9">9</div>
  </div>
  <div class="row">
    <div class="col-xl-4">4</div>
    <div class="col-xl-8">8</div>
  </div>
  <div class="row">
    <div class="col-12">12</div>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 3.2</h3>
      <p>Desarrollar el ejercicio 3.1 con Tailwind CSS</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <title>Tailwind Grid Example</title>
</head>
<body>

<div class="container mx-auto px-4">
  <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
    <div class="col-span-1 bg-gray-300">1</div>
    <div class="col-span-11 bg-gray-400">11</div>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-12 gap-4">
    <div class="col-span-2 bg-gray-300">2</div>
    <div class="col-span-10 bg-gray-400">10</div>
  </div>
  <div class="grid grid-cols-3 lg:grid-cols-12 gap-4">
    <div class="col-span-3 bg-gray-300">3</div>
    <div class="col-span-9 bg-gray-400">9</div>
  </div>
  <div class="grid grid-cols-4 xl:grid-cols-12 gap-4">
    <div class="col-span-4 bg-gray-300">4</div>
    <div class="col-span-8 bg-gray-400">8</div>
  </div>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 bg-gray-300">12</div>
  </div>
</div>

</body>
</html>`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 3.3</h3>
      <p>Desarrollar el ejercicio 3.1 con CSS puro</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>CSS Grid Example</title>
</head>
<body>

<div class="container">
  <div class="row">
    <div class="col col-1">1</div>
    <div class="col col-11">11</div>
  </div>
  <div class="row">
    <div class="col col-md-2">2</div>
    <div class="col col-md-10">10</div>
  </div>
  <div class="row">
    <div class="col col-lg-3">3</div>
    <div class="col col-lg-9">9</div>
  </div>
  <div class="row">
    <div class="col col-xl-4">4</div>
    <div class="col col-xl-8">8</div>
  </div>
  <div class="row">
    <div class="col col-12">12</div>
  </div>
</div>

</body>
</html>`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="css" style={atomDark}>
        {`.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col {
  padding: 15px;
}

.col-1 { flex: 0 0 8.33%; }
.col-11 { flex: 0 0 91.66%; }
.col-md-2 { flex: 0 0 16.66%; }
.col-md-10 { flex: 0 0 83.33%; }
.col-lg-3 { flex: 0 0 25%; }
.col-lg-9 { flex: 0 0 75%; }
.col-xl-4 { flex: 0 0 33.33%; }
.col-xl-8 { flex: 0 0 66.66%; }
.col-12 { flex: 0 0 100%; }
`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 3.4</h3>
      <p>Diseñar una página web responsive con Bootstrap que contenga un diseño según la plantilla [Plantilla Bootstrap]. Las características de la página deberán tener el mismo contenido, texto e imágenes. Así también la misma distribución, colores, diseño, animación para pantallas sm, md, lg, xl y xxl. Según la siguiente figura. imagen</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="custom.css">
  <title>Bootstrap Template</title>
</head>
<body>

<header class="bg-primary text-white p-4">
  <h1>My Website</h1>
</header>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container mt-4">
  <div class="row">
    <div class="col-lg-8">
      <h2>Welcome to My Website</h2>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </div>
    <div class="col-lg-4">
      <h3>Sidebar</h3>
      <p>Sidebar content goes here.</p>
    </div>
  </div>
</div>

<footer class="bg-dark text-white text-center p-4 mt-4">
  <p>&copy; 2024 My Website</p>
</footer>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 3.5</h3>
      <p>Desarrollar el ejercicio 3.4 con Tailwind CSS</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <title>Tailwind Template</title>
</head>
<body>

<header class="bg-blue-500 text-white p-4">
  <h1>My Website</h1>
</header>

<nav class="bg-gray-100 p-4">
  <div class="container mx-auto">
    <div class="flex justify-between items-center">
      <a class="text-blue-500" href="#">Navbar</a>
      <div class="hidden md:flex space-x-4">
        <a href="#" class="text-gray-600">Home</a>
        <a href="#" class="text-gray-600">Features</a>
        <a href="#" class="text-gray-600">Pricing</a>
      </div>
    </div>
  </div>
</nav>

<div class="container mx-auto mt-4">
  <div class="flex flex-wrap -mx-4">
    <div class="w-full lg:w-2/3 px-4">
      <h2 class="text-2xl font-bold">Welcome to My Website</h2>
      <p class="mt-2">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </div>
    <div class="w-full lg:w-1/3 px-4">
      <h3 class="text-xl font-semibold">Sidebar</h3>
      <p>Sidebar content goes here.</p>
    </div>
  </div>
</div>

<footer class="bg-gray-800 text-white text-center p-4 mt-4">
  <p>&copy; 2024 My Website</p>
</footer>

</body>
</html>`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 3.6</h3>
      <p>Desarrollar el ejercicio 3.4 con CSS puro</p>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>CSS Template</title>
</head>
<body>

<header class="header">
  <h1>My Website</h1>
</header>

<nav class="navbar">
  <div class="container">
    <a class="nav-link" href="#">Navbar</a>
    <div class="nav-links">
      <a class="nav-link" href="#">Home</a>
      <a class="nav-link" href="#">Features</a>
      <a class="nav-link" href="#">Pricing</a>
    </div>
  </div>
</nav>

<div class="container mt-4">
  <div class="row">
    <div class="main-content">
      <h2>Welcome to My Website</h2>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </div>
    <div class="sidebar">
      <h3>Sidebar</h3>
      <p>Sidebar content goes here.</p>
    </div>
  </div>
</div>

<footer class="footer">
  <p>&copy; 2024 My Website</p>
</footer>

</body>
</html>`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="css" style={atomDark}>
        {`.header {
  background-color: #007bff;
  color: white;
  padding: 1rem;
  text-align: center;
}

.navbar {
  background-color: #f8f9fa;
  padding: 0.5rem 1rem;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  color: #007bff;
  text-decoration: none;
  margin-right: 1rem;
}

.nav-links {
  display: flex;
}

.nav-links .nav-link {
  margin-left: 1rem;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.main-content {
  flex: 2;
  padding: 1rem;
}

.sidebar {
  flex: 1;
  padding: 1rem;
  background-color: #f8f9fa;
}

.footer {
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .main-content, .sidebar {
    flex: 1 1 100%;
  }
}`}
      </SyntaxHighlighter>
      
    </div>
  );
}

export default Lab03Component;