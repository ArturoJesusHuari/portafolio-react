<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>Datos Ingresados</title>
</head>
<body>
    <h1>Datos Ingresados</h1>
    <p><strong>Nombre:</strong> <%= request.getParameter("nombre") %></p>
    <p><strong>Apellidos:</strong> <%= request.getParameter("apellidos") %></p>
    <p><strong>Género:</strong> <%= request.getParameter("genero") %></p>
    <p><strong>Pasatiempos:</strong></p>
    <ul>
        <%
            String[] pasatiempos = request.getParameterValues("pasatiempos");
            if (pasatiempos != null) {
                for (String pasatiempo : pasatiempos) {
                    out.println("<li>" + pasatiempo + "</li>");
                }
            } else {
                out.println("<li>No seleccionó ningún pasatiempo</li>");
            }
        %>
    </ul>
</body>
</html>