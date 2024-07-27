const btn = document.getElementById("button");

class Persona {
    constructor(apellidos, nombres, direccion, telefono) {
        this.apellidos = apellidos;
        this.nombres = nombres;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}

class Estudiante extends Persona {
    constructor(id, apellidos, nombres, direccion, telefono) {
        super(apellidos, nombres, direccion, telefono);
        this.id = id;
    }
}

class Tabla {
    constructor(datos) {
        this.datos = datos;
    }
    agregarFilas() {
        var tabla = document.getElementById("tablaEstudiantes");
        this.datos.forEach(function(item) {
            var row = tabla.insertRow();
            row.insertCell(0).textContent = item.id;
            row.insertCell(1).textContent = item.apellidos;
            row.insertCell(2).textContent = item.nombres;
            row.insertCell(3).textContent = item.direccion;
            row.insertCell(4).textContent = item.telefono;
        });
    }
}

class TablaEstudiantes extends Tabla {
    constructor(estudiantes) {
        super(estudiantes);
    }
}

const estudiantes = [
    new Estudiante(1, "García", "Juan", "Calle 123", "1234567890"),
    new Estudiante(2, "López", "María", "Avenida 456", "0987654321"),
    new Estudiante(3, "Martínez", "Carlos", "Plaza Principal", "1357924680"),
    new Estudiante(4, "Rodríguez", "Ana", "Carrera 789", "2468013579"),
    new Estudiante(5, "Sánchez", "Luis", "Avenida Central", "9876543210"),
    new Estudiante(6, "Gómez", "Laura", "Paseo del Sol", "0123456789"),
    new Estudiante(7, "Pérez", "Pedro", "Callejón 321", "7890123456"),
    new Estudiante(8, "Hernández", "Marta", "Camino Real", "6789012345"),
    new Estudiante(9, "Díaz", "José", "Ronda 456", "2345678901"),
    new Estudiante(10, "Vargas", "Lucía", "Avenida Sur", "5678901234")
];

btn.addEventListener("click", () => {
    const tabla = new TablaEstudiantes(estudiantes);
    tabla.agregarFilas();
});