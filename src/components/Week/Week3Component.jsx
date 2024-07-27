import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';
function Week3Component() {
  return(
    <div>
      <HeroComponent 
      title={"Desarrollo Front-End con Bootstrap y Tailwind CSS"}
      description={"Esta semana se centra en el desarrollo de páginas web front-end utilizando las librerías CSS Bootstrap y Tailwind. Los estudiantes aprenderán a crear layouts y componentes utilizando Bootstrap, una de las librerías más populares para el desarrollo rápido y responsivo de sitios web. Luego, se explorará Tailwind CSS, una librería de utilidades que permite un control detallado del diseño mediante clases predefinidas. Se estudiarán elementos de tipografía, diseño, flexbox, y componentes de la interfaz de usuario (UI). La semana culmina con una práctica calificada, donde los estudiantes desarrollarán un sitio web utilizando un framework."}>
        <img src={Semana1}></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
          <b>
          Bootstrap: 
          </b>
          Librería de código abierto que facilita el desarrollo rápido de sitios web responsivos y móviles.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Tailwind CSS: 
          </b>
          Framework de CSS que ofrece una colección de clases utilitarias predefinidas para facilitar el diseño detallado de interfaces web.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Layout: 
          </b>
          Estructura y disposición de los elementos dentro de una página web.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Flexbox: 
          </b>
          Sistema de diseño en CSS que permite la distribución y alineación eficiente de los elementos dentro de un contenedor.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          SEO (Search Engine Optimization): 
          </b>
          Conjunto de técnicas para mejorar la visibilidad de un sitio web en los resultados de los motores de búsqueda.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Componentes de UI (User Interface): 
          </b>
          Elementos interactivos de una aplicación web, como botones, formularios, menús, etc.
          </p>
        </li>
      </DefinitionsComponent> 
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>El uso de librerías CSS como Bootstrap y Tailwind CSS simplifica el proceso de desarrollo front-end al proporcionar herramientas y estilos predefinidos que permiten a los desarrolladores crear interfaces atractivas y responsivas de manera eficiente. Bootstrap es ideal para un desarrollo rápido con componentes reutilizables, mientras que Tailwind ofrece un control más granular sobre el diseño. Estas habilidades son cruciales para la creación de experiencias de usuario modernas y profesionales, permitiendo a los desarrolladores centrarse en la funcionalidad y la estética sin reinventar la rueda. La práctica calificada refuerza estos conceptos al permitir a los estudiantes aplicar lo aprendido en un proyecto real, consolidando su comprensión y capacidad para utilizar estos frameworks en el desarrollo web.</p>
        </ul>
    </div>
    </div>
  )
}
export default Week3Component