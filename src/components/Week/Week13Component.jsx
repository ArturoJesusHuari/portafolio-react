import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';

function Week13Component() {
  return(
    <div>
      <HeroComponent 
      title={"Desarrollo de API Rest con Spring"}
      description={"Esta semana se centra en el desarrollo de API Rest utilizando Spring. Los estudiantes aprenderán sobre la arquitectura MVC, la creación de endpoints HTTP y el manejo de datos en una API Rest. Además, se cubrirá el despliegue de la API en un entorno de producción."}>
        <img src={Semana1} alt="Semana 13"></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
          <b>
          API Rest:
          </b>
          Interfaz que permite la comunicación entre sistemas utilizando las convenciones y métodos del protocolo HTTP.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Spring MVC:
          </b>
          Marco de trabajo en Spring que facilita la implementación del patrón Modelo-Vista-Controlador para aplicaciones web.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Endpoints HTTP:
          </b>
          Puntos de acceso a recursos de una API Rest que responden a solicitudes HTTP específicas.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Despliegue en Producción:
          </b>
          Proceso de lanzar una aplicación en un entorno real donde los usuarios pueden acceder y utilizar sus funcionalidades.
          </p>
        </li>
      </DefinitionsComponent> 
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>
          El desarrollo de API Rest es fundamental para la creación de aplicaciones modernas que necesitan interactuar con múltiples sistemas y plataformas. Spring proporciona un conjunto de herramientas robustas para implementar API Rest de manera eficiente y segura. Comprender la arquitectura MVC y cómo crear y manejar endpoints HTTP es esencial para construir API que sean fáciles de mantener y escalar. El despliegue de la API en un entorno de producción completa el ciclo de desarrollo, asegurando que los estudiantes estén preparados para lanzar sus aplicaciones en el mundo real y garantizar que sean accesibles y funcionales para los usuarios finales.
          </p>
        </ul>
    </div>
    </div>
  )
}

export default Week13Component;