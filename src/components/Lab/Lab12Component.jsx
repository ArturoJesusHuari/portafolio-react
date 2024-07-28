import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana12/Ejercicio1">Ejercicio 11.1</a>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<!-- form1.jsp -->
<%@page contentType="text/html" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario GET</title>
</head>
<body>
    <form action="display.jsp" method="get">
        <div>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required>
        </div>
        <div>
            <label for="apellidos">Apellidos</label>
            <input type="text" id="apellidos" name="apellidos" required>
        </div>
        <div>
            <label>Género</label>
            <input type="radio" id="masculino" name="genero" value="Masculino" required>
            <label for="masculino">Masculino</label>
            <input type="radio" id="femenino" name="genero" value="Femenino">
            <label for="femenino">Femenino</label>
        </div>
        <div>
            <label>Pasatiempos</label>
            <input type="checkbox" id="futbol" name="pasatiempos" value="Fútbol">
            <label for="futbol">Fútbol</label>
            <input type="checkbox" id="natacion" name="pasatiempos" value="Natación">
            <label for="natacion">Natación</label>
            <input type="checkbox" id="lectura" name="pasatiempos" value="Lectura">
            <label for="lectura">Lectura</label>
        </div>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<!-- display.jsp -->
<%@page contentType="text/html" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos Capturados</title>
</head>
<body>
    <h1>Datos Capturados</h1>
    <p><strong>Nombre:</strong> <%= request.getParameter("nombre") %></p>
    <p><strong>Apellidos:</strong> <%= request.getParameter("apellidos") %></p>
    <p><strong>Género:</strong> <%= request.getParameter("genero") %></p>
    <p><strong>Pasatiempos:</strong> <%= String.join(", ", request.getParameterValues("pasatiempos")) %></p>
</body>
</html>`}
      </SyntaxHighlighter>

      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.2</h4>
      <p>Desarrollar un formulario con nombre, apellidos (input text), género (input radio), pasatiempos: fútbol, natación, lectura (input check). Capturar los datos y mostrarlos en otro archivo JSP mediante el método POST.</p>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana12/Ejercicio2">Ejercicio 11.2</a>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<!-- form2.jsp -->
<%@page contentType="text/html" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario POST</title>
</head>
<body>
    <form action="displayPost.jsp" method="post">
        <div>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required>
        </div>
        <div>
            <label for="apellidos">Apellidos</label>
            <input type="text" id="apellidos" name="apellidos" required>
        </div>
        <div>
            <label>Género</label>
            <input type="radio" id="masculino" name="genero" value="Masculino" required>
            <label for="masculino">Masculino</label>
            <input type="radio" id="femenino" name="genero" value="Femenino">
            <label for="femenino">Femenino</label>
        </div>
        <div>
            <label>Pasatiempos</label>
            <input type="checkbox" id="futbol" name="pasatiempos" value="Fútbol">
            <label for="futbol">Fútbol</label>
            <input type="checkbox" id="natacion" name="pasatiempos" value="Natación">
            <label for="natacion">Natación</label>
            <input type="checkbox" id="lectura" name="pasatiempos" value="Lectura">
            <label for="lectura">Lectura</label>
        </div>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<!-- displayPost.jsp -->
<%@page contentType="text/html" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos Capturados</title>
</head>
<body>
    <h1>Datos Capturados</h1>
    <p><strong>Nombre:</strong> <%= request.getParameter("nombre") %></p>
    <p><strong>Apellidos:</strong> <%= request.getParameter("apellidos") %></p>
    <p><strong>Género:</strong> <%= request.getParameter("genero") %></p>
    <p><strong>Pasatiempos:</strong> <%= String.join(", ", request.getParameterValues("pasatiempos")) %></p>
</body>
</html>`}
      </SyntaxHighlighter>

      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.3</h4>
      <p>Declarar un array multidimensional con los datos de 10 estudiantes y mostrarlos en un JSP que muestre una tabla estilizada con CSS.</p>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana12/Ejercicio3">Ejercicio 11.3</a>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<!-- students.jsp -->
<%@page contentType="text/html" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estudiantes</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Lista de Estudiantes</h1>
    <table>
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Género</th>
            <th>Pasatiempos</th>
        </tr>
        <% 
            String[][] estudiantes = {
                {"Juan", "Pérez", "Masculino", "Fútbol, Natación"},
                {"Ana", "Gómez", "Femenino", "Lectura"},
                {"Luis", "Martínez", "Masculino", "Fútbol"},
                {"Maria", "López", "Femenino", "Natación, Lectura"},
                {"Pedro", "García", "Masculino", "Fútbol"},
                {"Laura", "Martínez", "Femenino", "Lectura"},
                {"Carlos", "Rodríguez", "Masculino", "Natación"},
                {"Sofia", "Hernández", "Femenino", "Fútbol, Lectura"},
                {"Jorge", "Fernández", "Masculino", "Natación"},
                {"Elena", "Ramírez", "Femenino", "Fútbol, Natación, Lectura"}
            };
            for (String[] estudiante : estudiantes) {
        %>
            <tr>
                <td><%= estudiante[0] %></td>
                <td><%= estudiante[1] %></td>
                <td><%= estudiante[2] %></td>
                <td><%= estudiante[3] %></td>
            </tr>
        <% } %>
    </table>
</body>
</html>`}
      </SyntaxHighlighter>

      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.4</h4>
      <p>Desarrollar un CRUD completo en JSP con una base de datos en MySQL utilizando JDBC para una tabla de estudiantes.</p>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana12/Ejercicio4">Ejercicio 11.4</a>
      <SyntaxHighlighter language="java" style={atomDark}>
        {`<!-- database connection class -->
public class DBConnection {
    public static Connection getConnection() throws SQLException {
        String url = "jdbc:mysql://localhost:3306/mi_database";
        String user = "root";
        String password = "password";
        return DriverManager.getConnection(url, user, password);
    }
}`}

      </SyntaxHighlighter>
      <SyntaxHighlighter language="html" style={atomDark}>
        {`<!-- studentCRUD.jsp -->
<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@page import="java.sql.*" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Estudiantes</title>
</head>
<body>
    <h1>CRUD Estudiantes</h1>

    <!-- Formulario para agregar estudiantes -->
    <h2>Agregar Estudiante</h2>
    <form action="studentCRUD.jsp" method="post">
        <div>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required>
        </div>
        <div>
            <label for="apellidos">Apellidos</label>
            <input type="text" id="apellidos" name="apellidos" required>
        </div>
        <div>
            <label for="genero">Género</label>
            <input type="text" id="genero" name="genero" required>
        </div>
        <div>
            <label for="pasatiempos">Pasatiempos</label>
            <input type="text" id="pasatiempos" name="pasatiempos">
        </div>
        <input type="submit" name="action" value="Agregar">
    </form>

    <% 
        String action = request.getParameter("action");
        if (action != null) {
            try {
                Connection conn = DBConnection.getConnection();
                Statement stmt = conn.createStatement();
                
                if (action.equals("Agregar")) {
                    String nombre = request.getParameter("nombre");
                    String apellidos = request.getParameter("apellidos");
                    String genero = request.getParameter("genero");
                    String pasatiempos = request.getParameter("pasatiempos");
                    
                    String sql = "INSERT INTO estudiantes (nombre, apellidos, genero, pasatiempos) VALUES (?, ?, ?, ?)";
                    PreparedStatement pstmt = conn.prepareStatement(sql);
                    pstmt.setString(1, nombre);
                    pstmt.setString(2, apellidos);
                    pstmt.setString(3, genero);
                    pstmt.setString(4, pasatiempos);
                    pstmt.executeUpdate();
                }
                
                // Similar logic for "Actualizar" and "Eliminar" actions can be added here
                
                // Mostrar estudiantes
                ResultSet rs = stmt.executeQuery("SELECT * FROM estudiantes");
                out.println("<h2>Lista de Estudiantes</h2>");
                out.println("<table border='1'><tr><th>ID</th><th>Nombre</th><th>Apellidos</th><th>Género</th><th>Pasatiempos</th></tr>");
                while (rs.next()) {
                    out.println("<tr>");
                    out.println("<td>" + rs.getInt("id") + "</td>");
                    out.println("<td>" + rs.getString("nombre") + "</td>");
                    out.println("<td>" + rs.getString("apellidos") + "</td>");
                    out.println("<td>" + rs.getString("genero") + "</td>");
                    out.println("<td>" + rs.getString("pasatiempos") + "</td>");
                    out.println("</tr>");
                }
                out.println("</table>");
                
                rs.close();
                stmt.close();
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    %>
</body>
</html>`}
      </SyntaxHighlighter>

    </div>
  );
}

export default Lab12Component;