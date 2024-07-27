<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <title>Estudiantes</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class='bg-gray-200'>
    <h1 class='mx-8 mt-8 text-xl'>Datos de MYSQL</h1>
    
    <!-- Formulario para crear un nuevo estudiante -->
    <form action="create.jsp" method="post" class="mx-8 my-4">
        <input type="text" name="nombre" placeholder="Nombre" class="px-2 py-1" required>
        <input type="email" name="email" placeholder="Email" class="px-2 py-1" required>
        <input type="text" name="materia" placeholder="Materia" class="px-2 py-1" required>
        <button type="submit" class="px-4 py-2 bg-green-600 text-white">Agregar</button>
    </form>

    <table class="table-auto my-8 mx-8 border-2 text-left bg-gray-800 text-white">
        <thead class="border-2 bg-black">
            <tr>
                <th class="px-8 text-zinc-600">ID</th>
                <th class="px-8">Nombre</th>
                <th class="px-8 text-green-600">Email</th>
                <th class="px-8 text-orange-600">Materia</th>
                <th class="px-8 text-red-600">Acciones</th>
            </tr>
        </thead>
        <tbody>
<%
try {
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/DAW2", "root", "root");
    Statement stmt = conn.createStatement();
    String query = "SELECT * FROM Estudiantes";
    ResultSet rs = stmt.executeQuery(query);

    while (rs.next()) {
        int id = rs.getInt("id");
        String nombre = rs.getString("nombre");
        String email = rs.getString("email");
        String materia = rs.getString("materia");

        out.println("<tr class='border-2'>");
        out.println("<td class='px-8 text-zinc-600'>" + id + "</td>");
        out.println("<td class='px-8'>" + nombre + "</td>");
        out.println("<td class='px-8 text-green-600'>" + email + "</td>");
        out.println("<td class='px-8 text-orange-600'>" + materia + "</td>");
        out.println("<td class='px-8 text-red-600'>");
        out.println("<form action='update.jsp' method='post' style='display:inline-block;'>");
        out.println("<input type='hidden' name='id' value='" + id + "'>");
        out.println("<input type='text' name='nombre' value='" + nombre + "' class='px-2 py-1' required>");
        out.println("<input type='email' name='email' value='" + email + "' class='px-2 py-1' required>");
        out.println("<input type='text' name='materia' value='" + materia + "' class='px-2 py-1' required>");
        out.println("<button type='submit' class='px-4 py-2 bg-blue-600 text-white'>Actualizar</button>");
        out.println("</form>");
        out.println("<form action='delete.jsp' method='post' style='display:inline-block;'>");
        out.println("<input type='hidden' name='id' value='" + id + "'>");
        out.println("<button type='submit' class='px-4 py-2 bg-red-600 text-white'>Eliminar</button>");
        out.println("</form>");
        out.println("</td>");
        out.println("</tr>");
    }

    rs.close();
    stmt.close();
    conn.close();
} catch (Exception e) {
    out.println(e);
}
%>
        </tbody>
    </table>
</body>
</html>