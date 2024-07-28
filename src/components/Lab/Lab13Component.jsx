import React from 'react';

function Lab13Component() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Guía de Laboratorio N° 13</h1>
      <p><strong>Institución:</strong> Universidad Nacional del Centro del Perú</p>
      <p><strong>Programa de Estudios:</strong> Ingeniería de Sistemas</p>
      <p><strong>Asignatura:</strong> Desarrollo de Aplicaciones Web</p>
      <p><strong>Docente:</strong> Jaime Suasnábar Terrel</p>
      <p><strong>Semestre:</strong> IX</p>
      
      <h2 className="text-2xl font-semibold mt-6">I. OBJETIVO</h2>
      <p>Desarrollar aplicaciones backend con el Lenguaje JSP.</p>
      
      <h2 className="text-2xl font-semibold mt-6">II. FUNDAMENTO TEÓRICO</h2>
      
      <h3 className="text-xl font-semibold mt-4">Arquitectura MVC</h3>
      <p>La arquitectura MVC separa el desarrollo en capas: presentación (Vista), lógica (Controlador) y datos (Modelo). Esta separación protege los directorios públicos del servidor y facilita el sistema de rutas controladas.</p>
      
      <h3 className="text-xl font-semibold mt-4">Servlet</h3>
      <p>El Servlet es una clase de Jakarta EE que recibe peticiones web y genera respuestas. Los servlets se ejecutan dentro del contenedor de servlets de un servidor web.</p>
      
      <h3 className="text-xl font-semibold mt-4">Ejemplo 1 - HelloServlet</h3>
      <pre className="bg-black p-4 overflow-auto">
        {`package org.suasnabar.webx01.servlet;

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {

        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter(); 

        String html = "<!DOCTYPE html>\n" +
                "            <html>\n" +
                "            <head><title>Hello, World</title></head>\n" +
                "            <body>\n" +
                "              <h1>Hello, world!</h1>\n" +
                "              <p>Request URI: " + request.getRequestURI() + "</p>\n" +
                "              <p>Protocol: " + request.getProtocol() + "</p>\n" +
                "              <p>PathInfo: " + request.getPathInfo() + "</p>\n" +
                "              <p>Remote Address: " + request.getRemoteAddr() + "</p>\n" +
                "              <p>A Random Number: <strong>"+Math.random()+"</strong></p>\n" +
                "            </body>\n" +
                "            </html>\n";

        out.println(html);
        out.close();

        System.out.println("hello world, to Tomcat!");
    }
}`}
      </pre>
      
      <h3 className="text-xl font-semibold mt-4">Ejemplo 2 - Formularios y Servlet</h3>
      
      <h4 className="text-lg font-semibold mt-4">form.jsp</h4>
      <pre className="bg-black p-4 overflow-auto">
        {`<%@page contentType="text/html" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Formulario jsp</title>
</head>
<body>
	<form action="servlet-form" method="get">
		<div>
			<label for="nombre">Nombre</label>
			<input type="text" name="nombre">
		</div>
		<div>
			<label for="direccion">Dirección</label>
			<input type="text" name="direccion">
		</div>
		<div>
			<label for="ciudad">Ciudad</label>
			<input type="text" name="ciudad">
		</div>
		<input type="submit" value="Enviar">
	</form>
	<form action="servlet-form" method="get">
		<input type="submit" value="Ver">
	</form>
</body>
</html>`}
      </pre>

      <h4 className="text-lg font-semibold mt-4">ServletForm.java</h4>
      <pre className="bg-black p-4 overflow-auto">
        {`package org.suasnabar.webx01.servlet;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.suasnabar.webx01.logic.Estudiante;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/servlet-form")
public class ServletForm extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Estudiante> estudiantes = new ArrayList<>();
        estudiantes.add(new Estudiante("Jaime Suasnabar","lima 120", "Huancayo"));
        estudiantes.add(new Estudiante("Ada Marquez","Bolivar 450", "Arequipa"));
        estudiantes.add(new Estudiante("Juan Soto","Circunvalación 4542", "Lima"));
        estudiantes.add(new Estudiante("Andres Campos","La Marina 1542", "Lima"));
        HttpSession sesion = req.getSession();
        sesion.setAttribute("estudiantes", estudiantes);

        resp.sendRedirect("verform.jsp");
    }
}`}
      </pre>
      
      <h4 className="text-lg font-semibold mt-4">verform.jsp</h4>
      <pre className="bg-black p-4 overflow-auto">
        {`<%@page import="java.util.List" %>
<%@page import="org.suasnabar.webx01.logic.Estudiante" %>
<%@page contentType="text/html" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <style>
        .tabla,td, th{
            border: 1px solid black;
        }
    </style>
    <title>Title</title>
</head>
<body>
    <h1>Lista de Estudiantes</h1>
    <table class="tabla">
        <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Ciudad</th>
        </tr>
    <%
        List<Estudiante> estudiantes = (List) request.getSession().getAttribute("estudiantes");
        for(Estudiante estudiante: estudiantes){
     %>
        <tr>
            <td><%= estudiante.getNombre() %></td>
            <td><%= estudiante.getDireccion() %></td>
            <td><%= estudiante.getCiudad() %></td>
        </tr>
    <% 
        }
     %>
    </table>
</body>
</html>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Spring Framework</h3>
      <p>Spring Framework proporciona un modelo de programación y configuración completo para aplicaciones empresariales basadas en Java, integrando diversos patrones de diseño en la programación.</p>
      
      <h3 className="text-xl font-semibold mt-4">Spring Boot</h3>
      <p>Spring Boot simplifica la creación de proyectos con Spring Framework, eliminando la complejidad de configuraciones e instalaciones, e integrando un servidor de pruebas para desplegar la aplicación en desarrollo.</p>
      
      <h3 className="text-xl font-semibold mt-4">Servicios API</h3>
      <p>Una API (Interfaz de Programación de Aplicaciones) permite que una aplicación se comunique con otra, intercambiando datos en formatos como JSON o XML.</p>
      
      <h3 className="text-xl font-semibold mt-4">Endpoints - API REST</h3>
      <p>Los endpoints en API REST definen operaciones CRUD a través de métodos HTTP y segmentos de URL.</p>
      
      <pre className="bg-black p-4 overflow-auto">
        {`@RestController
public class Rutas {
    @GetMapping("/home")
    String home(){
        return "Desde ruta Home";
    }
    @GetMapping("/students")
    String student1(){
        return "Desde Student1 Hola";
    }
    @GetMapping("/students/{fname}")
    String student2(@PathVariable String fname){
        return "Desde Student2 Hola: "+fname;
    }
    @GetMapping("/student/{fname}/{lname}")
    String student3(@PathVariable String fname, @PathVariable String lname){
        return "Desde Student2 Hola: "+fname+" "+lname;
    }
    @GetMapping("/student/{name}")
    String student4(@PathVariable String name, @RequestParam int nota1, @RequestParam int nota2){
        return "Desde Student2 Hola: "+name+" tienes "+nota1+" y "+nota2;
    }
    @GetMapping("/studentsa")
    @ResponseStatus(value = HttpStatus.ACCEPTED)
    String student5(){
        return "Desde Student5 Status";
    }
    @GetMapping("/datajson/v2")
    public Map<String, Map<String, Object>> getProvinciaData(){
        return Map.of("Distrito", Map.of("id",1, "name", "El Tambo"));
    }
}`}

      </pre>
      
      <h3 className="text-xl font-semibold mt-4">Models</h3>
      <pre className="bg-black p-4 overflow-auto">
        {`@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String address;
    private String city;
}`}
      </pre>
      
      <h2 className="text-2xl font-semibold mt-6">IV. EJERCICIOS DEL LABORATORIO</h2>
      
      <h4 className="text-lg font-semibold mt-4">Ejercicio 13.1</h4>
      <p>Desarrollar un controlador de API que compruebe que el id y nota de la ruta  son números. En caso de certeza, mostrar un JSON que contenga el id, nota, un mensaje de ruta válida y el estado 202.</p>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana13">Ejercicio 13.1</a>
      <h4 className="text-lg font-semibold mt-4">Ejercicio 13.2</h4>
      <p>Desarrollar un controlador de API con los id y notas según la ruta. Mostrar un JSON que contenga el id, promedio, un mensaje de ruta válida y el estado 202.</p>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana13">Ejercicio 13.2</a>
      <h4 className="text-lg font-semibold mt-4">Ejercicio 13.3</h4>
      <p>Diseñar y desarrollar una API REST para que devuelva datos desde una base de datos de 3 tablas: departamento (id, name), provincia (id, name) y distrito (id, name).</p>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana13">Ejercicio 13.3</a>
      <h4 className="text-lg font-semibold mt-4">Ejercicio 13.4</h4>
      <p>Diseñar y desarrollar una API REST para realizar las operaciones CRUD desde y hacia una base de datos de 3 tablas: departamento (id, name), provincia (id, name) y distrito (id, name).</p>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana13">Ejercicio 13.4</a>
    </div>
  );
}

export default Lab13Component;