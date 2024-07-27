import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';
function Week6Component() {
  return(
    <div>
      <HeroComponent 
      title={"Eventos, Condicionales y Bucles en Frameworks JavaScript y Consumo de APIs"}
      description={"Esta semana, los estudiantes aprenderán a desarrollar aplicaciones front-end manejando eventos, renderizado condicional e iterativo en frameworks JavaScript. Se cubrirá la creación y gestión de formularios y el uso de routing para la navegación entre diferentes vistas. Además, se explorará el consumo de APIs mediante el uso de promesas y la sintaxis async/await, utilizando librerías como Axios para realizar solicitudes HTTP. La semana incluye un laboratorio práctico enfocado en la gestión de eventos y el renderizado condicional e iterativo con datos obtenidos de una API."}>
        <img src={Semana1}></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
          <b>
          Eventos: 
          </b>
          Acciones o sucesos que ocurren en el navegador y pueden ser detectados y manejados por JavaScript, como clics, envíos de formularios, etc.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Renderizado Condicional: 
          </b>
          Técnica que permite mostrar u ocultar elementos en la interfaz de usuario basándose en ciertas condiciones.
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
          Renderizado Iterativo: 
          </b>
          Técnica que permite generar listas de elementos dinámicamente a partir de datos de un array o colección.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Formularios: 
          </b>
          Elementos HTML que permiten a los usuarios introducir y enviar datos a través de la web.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Routing: 
          </b>
          Proceso de definir y gestionar diferentes rutas o vistas en una aplicación web.
          </p>
        </li>
      </DefinitionsComponent> 
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>La capacidad de manejar eventos, realizar renderizados condicionales e iterativos y consumir APIs es crucial para el desarrollo de aplicaciones web interactivas y dinámicas. Comprender cómo funcionan los eventos y cómo gestionarlos permite a los desarrolladores crear interfaces de usuario más responsivas y agradables. El renderizado condicional e iterativo, junto con la gestión de formularios y routing, facilita la creación de aplicaciones complejas y bien estructuradas. Además, el consumo de APIs es fundamental para integrar datos externos y funcionalidades en las aplicaciones, haciendo posible el desarrollo de aplicaciones ricas en características y conectadas. La práctica en el laboratorio refuerza estos conceptos, proporcionando una experiencia práctica esencial para la aplicación de técnicas avanzadas en el desarrollo front-end.</p>
        </ul>
    </div>
    </div>
  )
}
export default Week6Component