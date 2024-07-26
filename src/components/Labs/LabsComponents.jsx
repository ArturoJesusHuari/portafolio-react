import LabComponent from "./LabComponent"
function LabsComponents() {
  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div class="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div class="flex flex-col justify-center divide-y divide-blue-200 [&>*]:py-8">
          <div class="w-full max-w-3xl mx-auto">
            <LabComponent time={"Sem 01"} title={"GUIA DE LABORATORIO N° 1"} description={"Lorem"}/>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LabsComponents