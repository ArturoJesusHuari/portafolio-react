import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';

function Week10Component() {
  return(
    <div>
      <HeroComponent 
      title={"Next JS – Static Generation y Incremental Static Regeneration"}
      description={"Esta semana se enfoca en el uso avanzado de Next.js, específicamente en Static Generation (SG) y Incremental Static Regeneration (ISR). Los estudiantes aprenderán a crear proyectos, manejar el routing, aplicar estilos y trabajar con formularios utilizando estas técnicas. La semana incluye un laboratorio práctico sobre el consumo de API utilizando las capacidades de Next.js para la generación y regeneración estática de páginas."}>
        <img src={Semana1} alt="Semana 10"></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
          <b>
          Static Generation (SG):
          </b>
          Técnica donde las páginas se generan en tiempo de compilación y se sirven como archivos HTML estáticos.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Incremental Static Regeneration (ISR):
          </b>
          Técnica que permite actualizar el contenido estático de las páginas después de la compilación inicial, proporcionando contenido actualizado sin reconstruir todo el sitio.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Routing en Next.js:
          </b>
          Sistema de navegación en Next.js que permite definir rutas de páginas y componentes.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Formularios en Next.js:
          </b>
          Manejo de entradas de usuario y envío de datos a través de formularios utilizando Next.js.
          </p>
        </li>
      </DefinitionsComponent> 
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>
          La capacidad de utilizar Static Generation y Incremental Static Regeneration en Next.js permite a los desarrolladores crear sitios web que son rápidos, eficientes y capaces de manejar contenido dinámico de manera efectiva. Estas técnicas combinan lo mejor del rendimiento de sitios estáticos con la flexibilidad de los sitios dinámicos. La práctica en el laboratorio de consumir APIs y generar contenido estático proporciona una comprensión profunda de cómo aplicar estas técnicas en proyectos reales, asegurando que los estudiantes estén bien equipados para crear aplicaciones web modernas y optimizadas.
          </p>
        </ul>
    </div>
    </div>
  )
}

export default Week10Component;