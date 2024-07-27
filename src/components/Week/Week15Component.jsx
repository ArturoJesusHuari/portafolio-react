import Semana1 from '../../assets/Semana1.jpeg'

import HeroComponent from "./HeroComponent";
import DefinitionsComponent from './DefinitionsComponent';

function Week15Component() {
  return(
    <div>
      <HeroComponent 
      title={"Presentación de Proyecto de Investigación y Evaluación"}
      description={"Esta semana se dedica a la presentación de proyectos de investigación y la evaluación de logros. Los estudiantes presentarán sus proyectos, demostrando las habilidades y conocimientos adquiridos a lo largo del curso. La evaluación se centrará en la calidad del proyecto, la comprensión de los conceptos aplicados y la capacidad de resolver problemas prácticos."}>
        <img src={Semana1} alt="Semana 15"></img>
      </HeroComponent>

      <DefinitionsComponent >
        <li className='my-2'>
          <p>
          <b>
          Proyecto de Investigación:
          </b>
          Trabajo desarrollado por los estudiantes que aplica los conocimientos adquiridos para resolver un problema práctico o investigar un área específica.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Evaluación de Logros:
          </b>
          Proceso de medir y calificar el desempeño de los estudiantes en base a criterios específicos y objetivos alcanzados.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Calidad del Proyecto:
          </b>
          Medida de la efectividad, eficiencia y aplicabilidad del proyecto presentado por los estudiantes.
          </p>
        </li>
        <li className='my-2'>
          <p>
          <b>
          Resolución de Problemas Prácticos:
          </b>
          Capacidad de aplicar conocimientos teóricos para encontrar soluciones a problemas del mundo real en el contexto del proyecto.
          </p>
        </li>
      </DefinitionsComponent> 
      <div className="w-full mx-10 my-8">
        <h1 className="text-2xl font-bold">Reflexión:</h1>
        <ul>
          <p className='my-2'>
          La presentación del proyecto de investigación es una oportunidad para que los estudiantes demuestren su comprensión y aplicación de los conceptos aprendidos durante el curso. Este proceso no solo evalúa sus conocimientos técnicos, sino también su capacidad para comunicar ideas y soluciones de manera efectiva. La evaluación de logros proporciona un feedback valioso, destacando áreas de fortaleza y aspectos que pueden mejorarse. Este ciclo de aprendizaje y evaluación es crucial para el desarrollo continuo de habilidades y para preparar a los estudiantes para desafíos futuros en sus carreras profesionales.
          </p>
        </ul>
    </div>
    </div>
  )
}

export default Week15Component;