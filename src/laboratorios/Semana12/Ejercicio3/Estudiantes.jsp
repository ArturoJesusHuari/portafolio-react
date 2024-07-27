<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>Estudiantes</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <table class="table-fixed my-8 mx-8 border-2 text-left bg-zinc-950 text-white" >
        <thead class="border-2">
            <tr>
                <th class="px-8 text-zinc-600">ID</th>
                <th class="px-8">Nombre</th>
                <th class="px-8">Email</th>
                <th class="px-8">Materia</th>
            </tr>
        </thead>
        <tbody>
            <%
            String[][] estudiantes = {
                {"1", "Juan Perez", "juan.perez@example.com", "Matemáticas"},
                {"2", "Maria Lopez", "maria.lopez@example.com", "Historia"},
                {"3", "Carlos Sanchez", "carlos.sanchez@example.com", "Física"},
                {"4", "Ana Garcia", "ana.garcia@example.com", "Química"},
                {"5", "Luis Martinez", "luis.martinez@example.com", "Biología"},
                {"6", "Laura Rodriguez", "laura.rodriguez@example.com", "Inglés"},
                {"7", "Jose Fernandez", "jose.fernandez@example.com", "Geografía"},
                {"8", "Marta Gomez", "marta.gomez@example.com", "Educación Física"},
                {"9", "Diego Diaz", "diego.diaz@example.com", "Arte"},
                {"10", "Elena Torres", "elena.torres@example.com", "Música"}
            };

            for(String[] estudiante :estudiantes) {
            out.println("<tr><th class='px-8 text-zinc-600'>"+estudiante[0]+"</th><th class='px-8'>"+estudiante[1]+"</th><th class='px-8'>"+estudiante[2]+"</th><th class='px-8'>"+estudiante[3]+"</th></tr>");
            }
            %>
        </tbody>
    </table>
</body>
</html>