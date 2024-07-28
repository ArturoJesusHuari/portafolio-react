import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
function Lab11Component() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Guía de Laboratorio N° 11</h1>
      <p><strong>Institución:</strong> Universidad Nacional del Centro del Perú</p>
      <p><strong>Programa de Estudios:</strong> Ingeniería de Sistemas</p>
      <p><strong>Asignatura:</strong> Desarrollo de Aplicaciones Web</p>
      <p><strong>Docente:</strong> Jaime Suasnábar Terrel</p>
      <p><strong>Semestre:</strong> IX</p>
      
      <h2 className="text-2xl font-semibold mt-6">I. OBJETIVO</h2>
      <p>Desarrollar aplicaciones dinámicas con Next JS.</p>
      
      <h2 className="text-2xl font-semibold mt-6">II. FUNDAMENTO TEÓRICO</h2>
      <p>Descripción del proceso de renderizado y Server-Side Rendering en Next JS, así como el uso de TypeScript.</p>

      <h2 className="text-2xl font-semibold mt-6">III. PRÁCTICA DE NEXT JS</h2>
      
      <h3 className="text-xl font-semibold mt-4">1. USO DE TYPESCRIPT EN NEXT JS</h3>
      <p>Implementación de un componente utilizando TypeScript en Next JS.</p>
      
      <h3 className="text-xl font-semibold mt-4">2. RENDERIZADO EN EL SERVIDOR</h3>
      <p>Desarrollar un componente que obtenga y muestre datos desde una API utilizando renderizado en el servidor.</p>
      
      <h3 className="text-xl font-semibold mt-4">3. APP ROUTER DE NEXT JS</h3>
      <p>Creación de componentes para un Layout y páginas individuales en una aplicación Next JS utilizando App Router.</p>

      <h3 className="text-xl font-semibold mt-4">4. BARRA DE NAVEGACIÓN AUTOMÁTICA</h3>
      <p>Generar opciones de navegación automáticamente desde un objeto.</p>
      
      <h2 className="text-2xl font-semibold mt-6">IV. EJERCICIOS DEL LABORATORIO</h2>
      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.1</h4>
      <p>Desarrollar un CRUD en Next.js con componentes de servidor y cliente con la API <a href="https://jsonplaceholder.typicode.com/posts">https://jsonplaceholder.typicode.com/posts</a>.</p>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana11">Ejercicio 11.1</a>

      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`// pages/api/posts.js
import axios from 'axios';

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case 'GET':
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      res.status(200).json(response.data);
      break;
    case 'POST':
      // Handle POST request
      break;
    case 'PUT':
      // Handle PUT request
      break;
    case 'DELETE':
      // Handle DELETE request
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(Method ${method} Not Allowed);
  }
}`}
      </SyntaxHighlighter>

      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);
  
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}`}
      </SyntaxHighlighter>

      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.2</h4>
      <p>Desarrollar un CRUD en Next.js con componentes de servidor y cliente utilizando la API <a href="https://jsonplaceholder.typicode.com/posts">https://jsonplaceholder.typicode.com/posts</a>. Al ejercicio 11.1 agregar las funcionalidades de:</p>
      <ul>
        <li>Ordenación por cada campo de datos</li>
        <li>Búsqueda en el campo title</li>
        <li>Paginación de 8 en 8.</li>
      </ul>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana11">Ejercicio 11.2</a>

      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`// pages/api/posts.js
import axios from 'axios';

export default async function handler(req, res) {
  const { method, query } = req;
  const { sort, search, page } = query;
  const pageSize = 8;
  const offset = (parseInt(page) - 1) * pageSize;
  
  switch (method) {
    case 'GET':
      let url = 'https://jsonplaceholder.typicode.com/posts';
      if (search) url += \`?q=\${search}\`;
      const response = await axios.get(url);
      let posts = response.data;
      if (sort) posts = posts.sort((a, b) => a[sort].localeCompare(b[sort]));
      posts = posts.slice(offset, offset + pageSize);
      res.status(200).json(posts);
      break;
    // Handle POST, PUT, DELETE
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(Method ${method} Not Allowed);
  }
}`}
      </SyntaxHighlighter>

      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(\`/api/posts?search=\${search}&sort=\${sort}&page=\${page}\`);
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, [search, sort, page]);
  
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title"
      />
      <select onChange={(e) => setSort(e.target.value)} value={sort}>
        <option value="">Sort by</option>
        <option value="title">Title</option>
        <option value="body">Body</option>
      </select>
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}`}
      </SyntaxHighlighter>

      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.3</h4>
      <p>Al ejercicio 11.2 agregar las funcionalidades de:</p>
      <ul>
        <li>Un layout y componentes tipo panel de administración con header, aside, main y footer.</li>
      </ul>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana11">Ejercicio 11.3</a>

      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`// components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header><h1>Admin Panel</h1></header>
      <aside>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/posts">Posts</a></li>
          </ul>
        </nav>
      </aside>
      <main>{children}</main>
      <footer><p>Footer content</p></footer>
    </div>
  );
};

export default Layout;`}

      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`// pages/_app.js
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;`}
      </SyntaxHighlighter>

      <h4 className="text-lg font-semibold mt-4">Ejercicio 11.4</h4>
      <p>Al ejercicio 11.3 agregar las funcionalidades de:</p>
      <ul>
        <li>Sistema de Autenticación utilizando usuarios de la API <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a>. Para el nombre de usuario utilice el campo username igual para la contraseña.</li>
      </ul>
      <a className='text-blue-600' href="https://github.com/ArturoJesusHuari/portafolio-react/tree/main/src/laboratorios/Semana11">Ejercicio 11.4</a>

      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`// pages/api/auth.js
import axios from 'axios';

export default async function handler(req, res) {
  const { method, body } = req;
  
  switch (method) {
    case 'POST':
      const { username, password } = body;
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const users = response.data;
      const user = users.find(user => user.username === username && username === password);
      
      if (user) {
        res.status(200).json({ message: 'Authenticated' });
      } else {
        res.status(401).json({ message: 'Unauthorized' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(Method ${method} Not Allowed);
  }
}`}
      </SyntaxHighlighter>

      <SyntaxHighlighter language="javascript" style={atomDark}>
        {`// pages/login.js
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    setMessage(data.message);
  };
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}`}
      </SyntaxHighlighter>

    </div>
  );
}

export default Lab11Component;