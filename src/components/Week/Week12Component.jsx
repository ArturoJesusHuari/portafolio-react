import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';

function Week12Component() {
  return(
    <div>
      <HeroComponent 
      title={"Desarrollo Backend con Spring Boot"}
      description={"Esta semana se enfoca en el desarrollo backend utilizando Java y el framework Spring Boot. Los estudiantes aprenderán sobre la arquitectura de aplicaciones web, servidores web, funcionamiento del server side y el uso de Spring Boot para crear aplicaciones robustas y escalables. Además, se cubrirán los módulos de Spring, servlets y JSP."}>
        <img src={Semana1} alt="Semana 12"></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
          <b>
          Spring Boot:
          </b>
          Framework basado en Java que simplifica el desarrollo de aplicaciones al proporcionar un conjunto de configuraciones predeterminadas y herramientas integradas.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Servlets:
          </b>
          Componentes Java que responden a solicitudes web, generalmente utilizados para implementar funcionalidades de servidor en aplicaciones web.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          JSP (JavaServer Pages):
          </b>
          Tecnología que permite crear contenido dinámico en páginas web utilizando Java, facilitando la integración de código Java con HTML.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Arquitectura de aplicaciones web:
          </b>
          Diseño estructural de aplicaciones web que define la interacción entre sus componentes y servicios.
          </p>
        </li>
      </DefinitionsComponent> 
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>
          Aprender a desarrollar aplicaciones backend con Spring Boot es una habilidad crucial para los desarrolladores que buscan construir sistemas robustos y escalables. Spring Boot simplifica muchas configuraciones y permite a los desarrolladores centrarse en la lógica de negocio en lugar de la configuración del framework. Conocer la arquitectura de aplicaciones web y el funcionamiento de los servidores web proporciona una base sólida para comprender cómo las aplicaciones interactúan con los clientes y otros servicios. La práctica en el laboratorio refuerza estos conceptos, preparando a los estudiantes para enfrentar desafíos del mundo real en el desarrollo backend.
          </p>
        </ul>
    </div>
    </div>
  )
}

export default Week12Component;