import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';
function Week7Component() {
  return(
    <div>
      <HeroComponent 
      title={"Uso de Hooks en Frameworks JavaScript"}
      description={"Esta semana se dedica al aprendizaje y uso de hooks en frameworks JavaScript, especialmente en React. Los hooks son funciones especiales que permiten utilizar el estado y otras características de React sin escribir una clase. Los estudiantes aprenderán sobre hooks básicos como useState, useEffect, useContext, useRef, useReducer, useCallback y useMemo. Además, se explorará la creación y uso de hooks personalizados para reutilizar lógica de componentes. La semana incluye un laboratorio práctico para aplicar el uso de hooks en diversos escenarios."}>
        <img src={Semana1}></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
          <b>
          useState: 
          </b>
          Hook que permite agregar estado local a los componentes funcionales de React.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          useEffect: 
          </b>
          Hook que permite realizar efectos secundarios en componentes funcionales, como suscripciones o cambios en el DOM.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          useContext: 
          </b>
          Hook que permite acceder al contexto de React, facilitando el manejo global de estados o configuraciones.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          useReducer: 
          </b>
          Hook similar a useState, pero más adecuado para manejar estados complejos y lógicas de actualización.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          useCallback: 
          </b>
          Hook que devuelve una versión memorizada de una función que solo cambia si una de las dependencias ha cambiado, útil para optimizar la performance.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Hooks Personalizados: 
          </b>
          Hooks creados por los desarrolladores para encapsular y reutilizar lógica de componentes.
          </p>
        </li>
      </DefinitionsComponent> 
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>El uso de hooks en frameworks JavaScript, como React, marca una evolución significativa en la manera de manejar estados y efectos en componentes funcionales. Estos hooks simplifican el código y mejoran la legibilidad, permitiendo a los desarrolladores escribir componentes más limpios y con menos errores. La capacidad de crear hooks personalizados amplía aún más esta flexibilidad, facilitando la reutilización de lógica y promoviendo prácticas de desarrollo más eficientes y mantenibles. Aprender y dominar el uso de hooks es esencial para cualquier desarrollador que trabaje con React, ya que esto permite aprovechar al máximo las capacidades del framework y construir aplicaciones web robustas y escalables. La práctica en el laboratorio refuerza estos conceptos, brindando experiencia práctica en el manejo y aplicación de hooks en diversos contextos.</p>
        </ul>
    </div>
    </div>
  )
}
export default Week7Component