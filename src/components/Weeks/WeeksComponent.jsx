import WeekComponents from "./WeekComponent";
import HTML from "../../assets/html.webp"
import CSS from "../../assets/CSS.png"
import BT from "../../assets/BT.jpeg"
import JavaScript from "../../assets/Javascript.png"
import FJS from "../../assets/FrameworkJS.jpg"
import HTTP from "../../assets/HTTP.gif"
import React from "../../assets/React.jpeg"
import NextJS from "../../assets/next.jpg"
import NextJS1 from "../../assets/next1.jpeg"
import NextJS2 from "../../assets/next2.png"
import SpringBoot from "../../assets/spring.jpeg"
import SpringBoot1 from "../../assets/spring1.jpeg"

function WeeksComponents() {
  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h2 className="text-xl font-bold uppercase text-white my-8">Semanas</h2>
      <div>
        <ul className="group/list">
          <WeekComponents title={"Semana 01"} stack={["HTML"]} to={"/portafolio-react/week1"} description={"En este tema se desarrolló el lenguaje de marcado HTML (HyperText Markup Language), el cual es fundamental para la creación y estructuración del contenido en la web. Aprenderás a utilizar diferentes elementos y etiquetas para construir la estructura básica de una página web, incluyendo encabezados, párrafos, enlaces, imágenes, tablas y formularios, así como la importancia de una sintaxis correcta para asegurar la accesibilidad y el rendimiento."}>
            <img loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{color:"transparent"}} src={HTML} />
          </WeekComponents>
          <WeekComponents title={"Semana 02"} stack={["CSS"]} to={"/portafolio-react/week2"} description={"Aquí se abordó el uso de CSS (Cascading Style Sheets) para la presentación y diseño de páginas web. Se explorarán conceptos como selectores, propiedades y valores de CSS para aplicar estilos a los elementos HTML. Aprenderás a crear diseños atractivos y responsivos mediante el uso de layouts, colores, fuentes, márgenes, rellenos y otros estilos visuales que mejoran la experiencia del usuario."}>
            <img loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{color:"transparent"}} src={CSS} />
          </WeekComponents>
          <WeekComponents title={"Semana 03"} stack={["Bootstrap", "Tailwind"]} to={"/portafolio-react/week3"} description={"Este tema se centró en dos populares frameworks de CSS: Bootstrap y Tailwind. Bootstrap proporciona un conjunto de componentes predefinidos y un sistema de grillas que facilita el diseño de páginas web modernas y responsivas. Tailwind, por otro lado, es un framework de utilidades CSS que permite un diseño más personalizado y flexible, facilitando el desarrollo de interfaces de usuario mediante clases utilitarias."}>
            <img loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{color:"transparent"}} src={BT} />
          </WeekComponents>
          <WeekComponents title={"Semana 04"} stack={["JavaScript"]} to={"/portafolio-react/week4"} description={"En este apartado se estudiaró JavaScript, un lenguaje de programación esencial para añadir interactividad a las páginas web. Se profundizará en el manejo del DOM (Document Object Model) para manipular y actualizar dinámicamente el contenido y la estructura de las páginas web. Además, se explorará el uso del elemento Canvas de HTML5 para crear gráficos y animaciones 2D, proporcionando una base sólida en la programación gráfica."}>
            <img loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{color:"transparent"}} src={JavaScript} />
          </WeekComponents>
          <WeekComponents title={"Semana 05"} stack={["JavaScript", "React"]} to={"/portafolio-react/week5"} description={"Este tema se enfocó en el uso de frameworks JavaScript para el desarrollo de aplicaciones web del lado del cliente (FrontEnd). Aprenderás sobre frameworks populares como React, Angular o Vue.js, que facilitan la creación de interfaces de usuario interactivas y componentes reutilizables, mejorando la eficiencia y la mantenibilidad del código."}>
            <img loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{color:"transparent"}} src={FJS} />
          </WeekComponents>
          <WeekComponents title={"Semana 06"} stack={["JavaScript", "React"]} to={"/portafolio-react/week6"} description={"Aquí se cubrió cómo utilizar JavaScript para consumir APIs (Application Programming Interfaces) y trabajar con datos externos. Aprenderás a realizar peticiones HTTP utilizando técnicas como AJAX o la API Fetch para obtener y manipular datos de servidores remotos, lo cual es fundamental para el desarrollo de aplicaciones web dinámicas y conectadas."}>
            <img loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{color:"transparent"}} src={HTTP} />
          </WeekComponents>
          <WeekComponents title={"Semana 07"} stack={["React"]} to={"/portafolio-react/week7"} description={"Este tema profundizó en React, una biblioteca de JavaScript para construir interfaces de usuario. En particular, se enfocará en el uso de Hooks, una característica avanzada de React que permite gestionar el estado y los efectos secundarios en componentes funcionales, facilitando la creación de componentes más limpios y concisos."}>
            <img loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{color:"transparent"}} src={React} />
          </WeekComponents>
          <WeekComponents title={"Semana 09"} stack={["Next JS"]} to={"/portafolio-react/week9"} description={"Aquí se exploraró Next.js, un framework basado en React que ofrece capacidades avanzadas de renderizado del lado del cliente (CSR) y del lado del servidor (SSR). También se abordará la integración con TypeScript, un superset de JavaScript que añade tipado estático, mejorando la robustez y mantenibilidad del código en aplicaciones de gran escala."}>
            <img loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{color:"transparent"}} src={NextJS} />
          </WeekComponents>
          <WeekComponents title={"Semana 10"} stack={["Next JS"]} to={"/portafolio-react/week10"} description={"Este tema se centró en las técnicas de generación estática (Static Generation) e incremento estático (Incremental Static Regeneration) en Next.js. Aprenderás cómo pre-renderizar páginas en tiempo de construcción para mejorar el rendimiento y la experiencia del usuario, así como actualizar contenido estático de manera incremental sin necesidad de reconstruir todo el sitio."}>
            <img loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{color:"transparent"}} src={NextJS1} />
          </WeekComponents>
          <WeekComponents title={"Semana 11"} stack={["Next JS"]} to={"/portafolio-react/week11"} description={"Se estudió cómo manejar propiedades del lado del servidor (Server Side Props) en Next.js para pre-renderizar páginas con datos dinámicos en tiempo de solicitud. Además, se explorará Next Auth, una solución de autenticación para Next.js que simplifica la implementación de autenticación y autorización en aplicaciones web."}>
            <img loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{color:"transparent"}} src={NextJS2} />
          </WeekComponents>
          <WeekComponents title={"Semana 12"} stack={["Java", "Spring Boot"]} to={"/portafolio-react/week12"} description={"Este tema introducio Spring Boot, un framework basado en Java para el desarrollo de aplicaciones backend. Aprenderás a crear aplicaciones robustas y escalables, aprovechando la configuración automática y las buenas prácticas proporcionadas por Spring Boot para simplificar el desarrollo y la configuración de aplicaciones Java."}>
            <img loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{color:"transparent"}} src={SpringBoot} />
          </WeekComponents>
          <WeekComponents title={"Semana 13"} stack={["Java", "Spring Boot"]} to={"/portafolio-react/week13"} description={"Aquí se abordarón la creación de APIs RESTful utilizando Spring Boot. Aprenderás a diseñar, implementar y documentar endpoints REST que permitan la interacción con aplicaciones frontend o móviles, siguiendo principios de diseño REST y utilizando herramientas como Swagger para la documentación de APIs."}>
            <img loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{color:"transparent"}} src={SpringBoot1} />
          </WeekComponents>
        </ul>
      </div>
    </section>
  );
}
export default WeeksComponents