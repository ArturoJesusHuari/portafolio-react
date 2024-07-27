import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';
function Week5Component() {
  return(
    <div>
      <HeroComponent 
      title={"Desarrollo Front-End con Frameworks JavaScript"}
      description={"Esta semana se enfoca en el desarrollo de aplicaciones front-end utilizando frameworks JavaScript. Se abordará la estructura y operación de los frameworks, centrándose en el Client Side Rendering (CSR). Los estudiantes aprenderán a gestionar dependencias y utilizar herramientas de creación de proyectos. También se cubrirá el desarrollo basado en componentes, incluyendo la sintaxis JSX, PROPS y CHILDREN. Además, se explorarán diferentes métodos para aplicar estilos en los frameworks, como Styles inline, Style Sheets, Styles Modules y Styles components. Se realizará un laboratorio práctico para pasar datos con props y children y mostrarlos en un componente hijo."}>
        <img src={Semana1}></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
          <b>
          Framework JavaScript: 
          </b>
          Conjunto de herramientas y bibliotecas que facilitan el desarrollo de aplicaciones web complejas y estructuradas.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Client Side Rendering (CSR): 
          </b>
          Método de renderizado donde el contenido de la página se genera en el navegador del usuario utilizando JavaScript.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          JSX (JavaScript XML): 
          </b>
          Sintaxis que permite escribir estructuras HTML dentro del código JavaScript, comúnmente utilizada en React.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Props: 
          </b>
          Abreviatura de "properties", son argumentos que se pasan a los componentes en frameworks JavaScript para personalizar su funcionamiento.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Children: 
          </b>
          Elementos secundarios que se pueden pasar a un componente en frameworks JavaScript para ser renderizados dentro de ese componente.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Styles components: 
          </b>
          Técnicas y librerías como styled-components que permiten escribir CSS en JavaScript para componentes específicos.
          </p>
        </li>
      </DefinitionsComponent> 
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>La habilidad de construir páginas web utilizando HTML y CSS es fundamental para cualquier desarrollador web. Estas tecnologías permiten definir tanto la estructura como la presentación de los contenidos, lo cual es esencial para crear sitios web funcionales y atractivos. Además, el conocimiento de XML y la optimización para motores de búsqueda aseguran que las páginas no solo sean visualmente agradables sino también accesibles y fáciles de encontrar. La comprensión de conceptos como el DOM y las técnicas avanzadas de diseño responsivo con flexbox y grid layout dota a los desarrolladores de las herramientas necesarias para enfrentar los desafíos del desarrollo web moderno y garantizar una experiencia de usuario superior.</p>
        </ul>
    </div>
    </div>
  )
}
export default Week5Component