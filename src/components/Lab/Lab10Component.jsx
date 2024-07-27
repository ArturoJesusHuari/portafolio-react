import React, { useState, useEffect, useContext, useReducer } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Custom Hook for fetching data
const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

// Custom Hook for random background color
const useRandomColor = () => {
  const [color, setColor] = useState('#ffffff');
  
  const getRandomColor = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const changeColor = () => {
    setColor(getRandomColor());
  };

  return [color, changeColor];
};

// Reducer function for todo app
const reducer = (todos, action) => {
  switch (action.type) {
    case 'ADD':
      return [...todos, { id: Date.now(), title: action.payload, complete: false }];
    case 'COMPLETE':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    default:
      return todos;
  }
};

const initialTodos = [];

function Lab10Component() {
  // Ejercicio 10.1
  const [color1, changeColor1] = useRandomColor();
  const [color2, changeColor2] = useRandomColor();
  const [color3, changeColor3] = useRandomColor();

  // Ejercicio 10.2
  const [image, setImage] = useState('');
  const images = [
    'https://via.placeholder.com/150?text=1',
    'https://via.placeholder.com/150?text=2',
    'https://via.placeholder.com/150?text=3',
    'https://via.placeholder.com/150?text=4',
    'https://via.placeholder.com/150?text=5'
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setImage(images[Math.floor(Math.random() * images.length)]);
    }, 30000);
    return () => clearInterval(interval);
  }, [images]);

  // Ejercicio 10.3 & 10.4
  const EmployeeContext = React.createContext();
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [text1, setText1] = useState('');
  const [filteredText, setFilteredText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleChange = ({ target }) => {
    setText1(target.value);
  };

  const handleComplete = (todo) => {
    dispatch({ type: 'COMPLETE', id: todo.id });
  };

  const handleClick = () => {
    dispatch({ type: 'ADD', payload: text1 });
    setText1('');
  };

  const handleFilterChange = ({ target }) => {
    setFilteredText(target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedTodos = todos.filter(todo => todo.title.toLowerCase().includes(filteredText.toLowerCase()))
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Guía de Laboratorio N° 10</h1>
      <p><strong>Institución:</strong> Universidad Nacional del Centro del Perú</p>
      <p><strong>Programa de Estudios:</strong> Ingeniería de Sistemas</p>
      <p><strong>Asignatura:</strong> Desarrollo de Aplicaciones Web</p>
      <p><strong>Docente:</strong> Jaime Suasnábar Terrel</p>
      <p><strong>Semestre:</strong> IX</p>
      
      <h2 className="text-2xl font-semibold mt-6">I. OBJETIVO</h2>
      <p>Desarrollar aplicaciones dinámicas con React usando Hooks.</p>
      
      <h2 className="text-2xl font-semibold mt-6">II. FUNDAMENTO TEÓRICO</h2>
      
      <h3 className="text-xl font-semibold mt-4">Hooks</h3>
      <p>Hooks son funciones de JavaScript que permiten usar estado y otras características de React sin escribir una clase.</p>
      
      <h3 className="text-xl font-semibold mt-4">Lista de Hooks importantes</h3>
      <ul className="list-disc pl-5">
        <li>useState</li>
        <li>useEffect</li>
        <li>useContext</li>
        <li>useReducer</li>
        <li>useRef</li>
        <li>useNavigation</li>
        <li>useParams</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-4">Gestión de Estados en React</h3>
      <p>La gestión de estados es el proceso de seguimiento y actualización del estado de una aplicación. El estado es la condición actual de una aplicación.</p>
      
      <h2 className="text-2xl font-semibold mt-6">III. PRÁCTICA DE HOOKS</h2>
      
      <h3 className="text-xl font-semibold mt-4">1. HOOK USESTATE</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`const Ejem1UseState = () => {
	const [nombre, setNombre] = useState("");
	const [direccion, setDireccion] = useState("");
	const handleClick = () => {
		setNombre("Jaime")
		setDireccion("Junin 120")
	}
  return (
	<div>
		<p>Nombre: {nombre}</p>
		<p>Dirección: {direccion}</p>
		<button onClick={handleClick}>Cambiar Datos</button>
	</div>
  )
}`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">2. HOOK USEEFFECT</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`const Ejem1UseEffect = () => {
	const [titulo, setTitulo] = useState("Sin titulo");
	let nombre="Jaime"
	useEffect(() => {
		document.title=titulo
	}, [titulo]);
	const handleClick = () => {
		setTitulo(\`Hola \${nombre}\`)
	}
  return (
	<div>
		<p>{titulo}</p>
		<button onClick={handleClick}>Cambiar Titulo</button>
	</div>
  )
}`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">3. HOOK USECONTEXT</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`// Componente Provider
export const MyContext = React.createContext()
const Padre = () => {
	let docente = {
		nombre: "Jaime",
		apellido: "Suasnabar"
	}
	return (
		<MyContext.Provider value={docente} >
			<Hijo />
		</MyContext.Provider>
	)
}

// Componente Consumer
import { useContext } from 'react'
import { MyContext } from './Padre'
const Hijo = () => {
	const dato = useContext(MyContext)
	return (
		<div>
			<p>{dato.nombre}</p>
			<p>{dato.apellido}</p>
		</div>
	)
}`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">4. CUSTOM HOOK</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`// Creando el Custom Hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

// Usando el Custom Hook
import useFetch from "./useFetch";
const Padre3 = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>Title: {item.title}</p>;
        })}
    </>
  );
};`}
      </SyntaxHighlighter>
      
      <h3 className="text-xl font-semibold mt-4">5. HOOK USEREDUCER</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`const Ejem1UseReduce = () => {
  const [text1, setText1] = useState("");
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const handleChange = ({target}) => {
    setText1(target.value)
  }
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  const handleClick = () => {
    dispatch({ type: "ADD", payload: text1});
    setText1('');
  }  
  return (
    <>
    <div className="div form-container">
      <h4>New Todo Form</h4>
      <input 
      className='form-input'
      name='text1'
      type="text"
      value={text1}
      onChange={handleChange}
      />
      <button onClick={handleClick}>Add Todo</button>
    </div>
    <div className='div form-container'>
      <h4>Todo List</h4>
      {todos.map((todo) => (
        <div key={todo.id}>
        <label>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => handleComplete(todo)}
          />
          {todo.title}
        </label>
        </div>
      ))}
    </div>
    </>
  );
}`}
      </SyntaxHighlighter>
      
      <h2 className="text-2xl font-semibold mt-6">IV. EJERCICIOS DEL LABORATORIO</h2>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 10.1</h3>
      <p>Desarrollar una aplicación web que utilice useState con tres componentes:</p>
      <ol className="list-decimal pl-5">
        <li>Componente1: un div de fondo de color azul con un botón centrado vertical y horizontalmente.</li>
        <li>Componente2: una instancia del Componente1, pero su color modificado a verde durante su instanciación.</li>
        <li>Componente3: un div de fondo de color celeste con una fotografía de fondo transparente.</li>
      </ol>
      <p>Implementar un código en el botón para cambiar el color de fondo aleatoriamente en los 3 componentes.</p>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 10.2</h3>
      <p>Desarrollar una aplicación web con hooks personalizados y useEffect para crear un widget (150px x 150px) con una imagen (5 imágenes) que cambia aleatoriamente cada 30 segundos.</p>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 10.3</h3>
      <p>Desarrollar una aplicación web CRUD para gestionar los datos de un empleado (id, name, address, city) que permita agregar, editar y eliminar objetos utilizando useContext y useReducer. Además, el objeto deberá guardar y recuperar del LocalStorage.</p>
      
      <h3 className="text-xl font-semibold mt-4">Ejercicio 10.4</h3>
      <p>En el Ejercicio 10.3, agregar las siguientes funcionalidades:</p>
      <ol className="list-decimal pl-5">
        <li>Agregar un botón para mostrar los datos completos del empleado en una card.</li>
        <li>Agregar un input text y botón para filtrar datos de los empleados.</li>
        <li>Agregar una barra de paginación que permita mostrar 8 empleados por página.</li>
      </ol>
    </div>
  );
}

export default Lab10Component;