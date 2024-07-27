import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';

function Week9Component() {
  return (
    <div>
      <HeroComponent
        title={"Next JS – CSR / SSR y Typescript"}
        description={"Esta semana se centra en Next.js, explorando tanto el Client Side Rendering (CSR) como el Server Side Rendering (SSR). Los estudiantes aprenderán a crear proyectos, manejar el routing y estilos, y trabajar con formularios. También se introducirá TypeScript y su integración con JavaScript y Next.js. El laboratorio incluirá un caso práctico sobre el consumo de API con Next.js."}>
        <img src={Semana1} alt="Semana 9"></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
            <b>
              Next.js:
            </b>
            Framework de React para aplicaciones web con capacidades de renderizado del lado del cliente y del servidor.
          </p>
        </li>
        <li className='my-2'>
          <p>
            <b>
              CSR (Client Side Rendering):
            </b>
            Método de renderizado donde el contenido de la página se genera en el navegador del usuario utilizando JavaScript.
          </p>
        </li>
        <li className='my-2'>
          <p>
            <b>
              SSR (Server Side Rendering):
            </b>
            Método de renderizado donde el contenido de la página se genera en el servidor antes de ser enviado al cliente.
          </p>
        </li>
        <li className='my-2'>
          <p>
            <b>
              TypeScript:
            </b>
            Lenguaje de programación que se basa en JavaScript y añade tipado estático.
          </p>
        </li>
      </DefinitionsComponent>
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>
            Aprender Next.js y sus capacidades tanto de CSR como de SSR amplía las posibilidades de desarrollo web, permitiendo a los desarrolladores elegir la estrategia de renderizado que mejor se adapte a sus necesidades. La integración de TypeScript con Next.js añade una capa adicional de seguridad y eficiencia al desarrollo, al detectar errores en tiempo de compilación y proporcionando una mejor experiencia de desarrollo. La práctica en el laboratorio, especialmente el consumo de APIs, prepara a los estudiantes para construir aplicaciones web modernas, robustas y escalables, utilizando las mejores prácticas y tecnologías disponibles.
          </p>
        </ul>
      </div>
    </div>
  )
}

export default Week9Component;