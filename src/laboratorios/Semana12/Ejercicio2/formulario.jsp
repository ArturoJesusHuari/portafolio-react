<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>Formulario de Datos</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <h1 class="mx-40 my-4">Ingrese sus datos</h1>
    <div class="mx-40 my-4 flex">
      <form action="mostrarDatos.jsp" method="post">
        <label for="nombre">Nombre:</label>
        <input class="border-2"  type="text" id="nombre" name="nombre"><br><br>

        <label for="apellidos">Apellidos:</label>
        <input class="border-2"  type="text" id="apellidos" name="apellidos"><br><br>

        <label>Género:</label>
        <input class="border-2" type="radio" id="masculino" name="genero" value="Masculino">
        <label for="masculino">Masculino</label>
        <input class="border-2"  type="radio" id="femenino" name="genero" value="Femenino">
        <label for="femenino">Femenino</label><br><br>

        <label>Pasatiempos:</label><br>
        <input type="checkbox" id="futbol" name="pasatiempos" value="Futbol">
        <label for="futbol">Futbol</label><br>
        <input type="checkbox" id="natacion" name="pasatiempos" value="Natación">
        <label for="natacion">Natación</label><br>
        <input type="checkbox" id="lectura" name="pasatiempos" value="Lectura">
        <label for="lectura">Lectura</label><br><br>

        <button class="bg-green-600 text-white px-2 py-2 rounded" type="submit" value="Enviar">Enviar</button>
      </form>
    </div>
</body>
</html>