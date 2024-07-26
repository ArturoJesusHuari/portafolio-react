import DAW from "../../assets/DAW.jpg"
function IntroductionComponent() {
  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div>
        <h2 className="text-3xl font-bold uppercase text-white my-8">Introducción</h2>
        <img src={DAW} alt="" />
        <p className="my-8">¡Bienvenido a mi portafolio de desarrollo de aplicaciones web! En este sitio, encontrarás una recopilación de proyectos y demostraciones que abarcan una amplia gama de tecnologías y prácticas modernas en el desarrollo web, basadas en los temas cubiertos durante el curso. Este portafolio no solo muestra mis habilidades técnicas, sino también mi capacidad para integrar diversas herramientas y frameworks en soluciones cohesivas y efectivas.
        </p>
      </div>
    </section>
  )
}
export default IntroductionComponent