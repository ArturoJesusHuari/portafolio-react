import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';
function Week1Component() {
  return(
    <div>
      <HeroComponent 
      title={"Introducción a las tecnologías web y herramientas de desarrollo"}
      description={"En esta semana, se introducen los fundamentos básicos de las tecnologías web. Se cubren los conceptos esenciales sobre cómo funciona la web, incluyendo DNS y los protocolos TCP/IP y HTTP. Además, se explica el rol de diferentes desarrolladores en el ámbito web y se presenta la herramienta de desarrollo Visual Studio Code. Se realizará un laboratorio práctico para familiarizarse con los elementos de la interfaz de usuario de Visual Studio Code."}>
        <img src={Semana1}></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
          <b>
          DNS (Domain Name System):
          </b>
          Sistema de nombres de dominio que traduce nombres de dominio legibles por humanos (como www.example.com) a direcciones IP numéricas.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          TCP/IP (Transmission Control Protocol/Internet Protocol): 
          </b>
          Conjunto de protocolos de red que permiten la comunicación entre computadoras en una red.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          HTTP (HyperText Transfer Protocol): 
          </b>
          Protocolo de transferencia de hipertexto utilizado para la transmisión de documentos HTML.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Desarrollador Frontend: 
          </b>
          Profesional encargado de la parte visual y de interacción de una aplicación web.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Desarrollador Backend: 
          </b>
          Profesional encargado de la lógica del servidor, la base de datos y la integración de la aplicación web.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Desarrollador Fullstack: 
          </b>
          Profesional que maneja tanto el frontend como el backend de una aplicación web.
          </p>
        </li>
      </DefinitionsComponent> 
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>Comprender los fundamentos de las tecnologías web es crucial para cualquier desarrollador. Desde los roles específicos en el desarrollo de aplicaciones hasta los protocolos que permiten la comunicación en la web, cada componente juega un papel vital en la creación de experiencias web robustas y eficientes. La familiarización con herramientas como Visual Studio Code no solo facilita el desarrollo sino que también optimiza el flujo de trabajo, permitiendo a los desarrolladores enfocarse en la resolución de problemas y la creación de funcionalidades innovadoras. Esta semana sienta las bases para el aprendizaje avanzado y práctico en el desarrollo web.</p>
        </ul>
    </div>
    </div>
  )
}
export default Week1Component