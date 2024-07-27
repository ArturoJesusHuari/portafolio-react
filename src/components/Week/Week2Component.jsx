import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';
function Week2Component() {
  return(
    <div>
      <HeroComponent 
      title={"Construcción de Páginas Web con HTML, XML y CSS"}
      description={"Durante esta semana, los estudiantes aprenderán a construir páginas web utilizando Lenguaje Marcado de Hipertexto (HTML) y Lenguaje Marcado Extensible (XML). Se abordarán los estándares Open Web Plataform, la estructura de HTML y XML, y las principales etiquetas de HTML5. También se estudiará el árbol DOM, el renderizado de este árbol y el ciclo de vida de una página web, junto con estrategias de optimización para motores de búsqueda (SEO) y compatibilidad entre navegadores. Además, se explorarán las hojas de estilos en cascada (CSS), su sintaxis, y técnicas avanzadas de diseño web responsivo utilizando flexbox y grid layout."}>
        <img src={Semana1}></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
          <b>
          HTML (HyperText Markup Language): 
          </b>
          Lenguaje estándar para la creación de páginas web y aplicaciones web.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          XML (Extensible Markup Language): 
          </b>
          Lenguaje de marcado que define reglas para codificar documentos en un formato legible tanto para humanos como para máquinas.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Open Web Platform: 
          </b>
          Conjunto de tecnologías desarrolladas y estandarizadas por el W3C para la creación de aplicaciones web.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          DOM (Document Object Model): 
          </b>
          Interfaz de programación para documentos HTML y XML que representa la estructura de un documento como un árbol de nodos.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          SEO (Search Engine Optimization): 
          </b>
          Conjunto de técnicas para mejorar la visibilidad de un sitio web en los resultados de los motores de búsqueda.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          CSS (Cascading Style Sheets): 
          </b>
          Lenguaje utilizado para describir la presentación de un documento HTML o XML.
          </p>
        </li>
      </DefinitionsComponent> 
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>La habilidad de construir páginas web utilizando HTML y CSS es fundamental para cualquier desarrollador web. Estas tecnologías permiten definir tanto la estructura como la presentación de los contenidos, lo cual es esencial para crear sitios web funcionales y atractivos. Además, el conocimiento de XML y la optimización para motores de búsqueda aseguran que las páginas no solo sean visualmente agradables sino también accesibles y fáciles de encontrar. La comprensión de conceptos como el DOM y las técnicas avanzadas de diseño responsivo con flexbox y grid layout dota a los desarrolladores de las herramientas necesarias para enfrentar los desafíos del desarrollo web moderno y garantizar una experiencia de usuario superior.</p>
        </ul>
    </div>
    </div>
  )
}
export default Week2Component