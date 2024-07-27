import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';

function Week11Component() {
  return(
    <div>
      <HeroComponent 
      title={"Server Side Props y Autenticación con Next Auth"}
      description={"Esta semana se centra en el manejo de Server Side Props en Next.js y la implementación de autenticación con Next Auth. Los estudiantes aprenderán a usar getServerSideProps para obtener datos en el servidor y pasarlos como props a los componentes. También se cubrirá la instalación, configuración y uso de Next Auth para la autenticación de usuarios, incluyendo la creación de usuarios, manejo de sesiones y uso de OAuth."}>
        <img src={Semana1} alt="Semana 11"></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
          <b>
          getServerSideProps:
          </b>
          Método en Next.js que permite obtener datos en el servidor para pasarlos como props a los componentes.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Next Auth:
          </b>
          Librería para Next.js que facilita la implementación de autenticación de usuarios con soporte para múltiples proveedores de autenticación.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          OAuth:
          </b>
          Protocolo de autenticación que permite a los usuarios aprobar la aplicación para que actúe en su nombre sin compartir sus credenciales.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Manejo de Sesiones:
          </b>
          Proceso de mantener la información del usuario a lo largo de su interacción con la aplicación, permitiendo la persistencia del estado de autenticación.
          </p>
        </li>
      </DefinitionsComponent> 
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>
          La integración de Server Side Props y Next Auth en aplicaciones Next.js proporciona una combinación poderosa para el desarrollo de aplicaciones web seguras y dinámicas. Obtener datos del servidor y pasarlos como props permite un mejor control sobre el contenido y mejora el rendimiento. Implementar autenticación con Next Auth asegura que las aplicaciones sean seguras y pueden manejar diferentes proveedores de autenticación, brindando flexibilidad y seguridad a los usuarios. Estas habilidades son esenciales para los desarrolladores que buscan crear aplicaciones web profesionales y confiables.
          </p>
        </ul>
    </div>
    </div>
  )
}

export default Week11Component;