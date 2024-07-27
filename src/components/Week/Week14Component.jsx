import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';

function Week14Component() {
  return(
    <div>
      <HeroComponent 
      title={"Registro y Consumo de Microservicios con Eureka"}
      description={"Esta semana se enfoca en el uso de Eureka para el registro y consumo de microservicios. Los estudiantes aprenderán a crear y configurar un servidor Eureka, registrar microservicios y consumirlos. También se cubrirán configuraciones avanzadas y la implementación de microservicios en la nube."}>
        <img src={Semana1} alt="Semana 14"></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
          <b>
          Eureka:
          </b>
          Servicio de descubrimiento desarrollado por Netflix, utilizado para registrar y localizar microservicios en una arquitectura distribuida.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Registro de Microservicios:
          </b>
          Proceso de registrar un microservicio en un servidor Eureka para que pueda ser localizado por otros servicios.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Consumo de Microservicios:
          </b>
          Proceso de hacer solicitudes a microservicios registrados en Eureka desde otros servicios o aplicaciones.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Configuración en la Nube:
          </b>
          Ajustes necesarios para desplegar y gestionar microservicios y el servidor Eureka en un entorno de nube.
          </p>
        </li>
      </DefinitionsComponent> 
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>
          El uso de Eureka para el registro y consumo de microservicios es esencial en arquitecturas distribuidas y escalables. Permite una mejor gestión y descubrimiento de servicios, facilitando la comunicación entre ellos. La capacidad de configurar y desplegar estos servicios en la nube añade una capa de flexibilidad y escalabilidad, permitiendo a las aplicaciones crecer y adaptarse a diferentes cargas de trabajo. La práctica en el laboratorio proporciona una comprensión práctica de cómo implementar y gestionar microservicios en un entorno real, preparándolos para enfrentar desafíos en el desarrollo de software moderno.
          </p>
        </ul>
    </div>
    </div>
  )
}

export default Week14Component;