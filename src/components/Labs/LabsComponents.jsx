import LabComponent from "./LabComponent"
function LabsComponents() {
  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div class="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div class="flex flex-col justify-center divide-y divide-blue-200 [&>*]:py-8">
          <div class="w-full max-w-3xl mx-auto">
            <LabComponent sem={"01"} description={"Uso apropiado del Editor Visual Studio Code mediante el plugin Emmet y atajos de teclado de VSC."}/>
            <LabComponent sem={"02"} description={"Uso de HTML y CSS para diseñar elementos utilizables en la web y para desarrollar componentes de una página web."}/>
            <LabComponent sem={"03"} description={"Uso y personalización de librerías de código CSS para el diseño responsive y para el diseño de componentes de una página web."}/>
            <LabComponent sem={"04"} description={"Desarrollo de aplicaciones dinámicas con Javascript."}/>
            <LabComponent sem={"05"} description={"Desarrollo de aplicaciones dinámicas con Javascript."}/>
            
            <LabComponent sem={"10"} description={"Desarrollo de aplicaciones dinámicas con React usando Hooks."}/>
            <LabComponent sem={"11"} description={"Desarrollo de aplicaciones dinámicas con Next JS."}/>
            <LabComponent sem={"12"} description={"Desarrollo de aplicaciones backend con el Lenguaje JSP."}/>
            <LabComponent sem={"13"} description={"Desarrollo de aplicaciones backend con Spring Boot."}/>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LabsComponents