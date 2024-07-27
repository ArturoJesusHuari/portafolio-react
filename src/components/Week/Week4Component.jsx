import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';
function Week4Component() {
  return(
    <div>
      <HeroComponent 
      title={"Construcción de Páginas Web con HTML, XML y CSS"}
      description={"En esta semana, los estudiantes profundizan en el desarrollo front-end utilizando JavaScript. Se estudiarán los motores de JavaScript, variables y operadores, tipos de datos (números, strings, objetos, booleanos, etc.), estructuras de control y bucles. Se cubrirán diversos tipos de funciones, incluyendo funciones anónimas, funciones flecha y closures. Además, se aprenderá a manipular el DOM y crear animaciones con Canvas. Esta semana también incluye un laboratorio práctico para desarrollar una animación utilizando JavaScript."}>
        <img src={Semana1}></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
          <b>
          JavaScript: 
          </b>
          Lenguaje de programación interpretado que se utiliza principalmente para crear contenido dinámico en páginas web.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Motores JavaScript: 
          </b>
          Programas que ejecutan código JavaScript en un navegador web, como V8 (Chrome) y SpiderMonkey (Firefox).
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Variables y Operadores: 
          </b>
          Elementos básicos de JavaScript que almacenan datos y realizan operaciones matemáticas y lógicas.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Estructuras de Control: 
          </b>
          Instrucciones que permiten dirigir el flujo del programa, como if, else, switch y bucles (for, while).
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Funciones: 
          </b>
          Bloques de código que realizan una tarea específica y pueden ser reutilizados. Tipos incluyen funciones anónimas, funciones flecha y closures.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          DOM (Document Object Model): 
          </b>
          Representación en memoria de un documento HTML que permite la manipulación dinámica de su contenido y estructura.
          </p>
        </li>
      </DefinitionsComponent> 
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>JavaScript es fundamental para el desarrollo web moderno, permitiendo crear interactividad y dinamismo en las páginas web. Comprender sus conceptos básicos y avanzados, como las estructuras de control, las funciones y la manipulación del DOM, es esencial para cualquier desarrollador front-end. Además, la capacidad de crear animaciones y gráficos con Canvas abre nuevas posibilidades para mejorar la experiencia del usuario. Esta semana proporciona una base sólida en JavaScript, preparándolos para desafíos más complejos en el desarrollo de aplicaciones web interactivas y eficientes. La práctica en el laboratorio ayuda a consolidar estos conocimientos mediante la aplicación de conceptos teóricos en un entorno práctico.</p>
        </ul>
    </div>
    </div>
  )
}
export default Week4Component