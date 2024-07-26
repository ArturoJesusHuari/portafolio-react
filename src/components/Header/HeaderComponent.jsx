import ContentComponent from "./ContentComponent";
import SocialComponent from "./SocialComponent";
function HeaderComponent() {
  const myStyle = {
    borderRadius: "5%",
    opacity: "0.6",
    marginInline: "5%",
    height: "25vh"
  };
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-8">
      <div>
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Arturo Huari</h1>
          <img src="https://portal.andina.pe/EDPfotografia3/Thumbnail/2023/08/09/000983784W.jpg"
            style={myStyle} />
        </div>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full Stack Developer
        </h2>
        <p className="mt-4 leading-normal">Desarrollador Full Stack apasionado por crear soluciones
          innovadoras y eficientes.</p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-2 w-max">
            <ContentComponent text="Introduccion" to='/portafolio-react/intro' />
            <ContentComponent text="Semanas"  to='/portafolio-react/weeks'/>
            <ContentComponent text="Sobre Mi"  to='/portafolio-react/about-me'/>
            <ContentComponent text="Laboratorios"  to='/portafolio-react/labs'/>
            <ContentComponent text="Conclusión"  to='/portafolio-react/'/>
            <ContentComponent text="Reflexión"  to='/portafolio-react/'/>
            <ContentComponent text="Bibliografía"  to='/portafolio-react/'/>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-2 flex items-center" aria-label="Social media">
        <SocialComponent text="LinkedIn" href="https://www.linkedin.com/in/arturohuari/">
         <i className="fa-brands fa-linkedin"></i>
        </SocialComponent>
        <SocialComponent text="GitHub" href="https://github.com/ArturoJesusHuari">
         <i className="fa-brands fa-github"></i>
        </SocialComponent>
        <SocialComponent text="WhatsApp" href="https://wa.me/51975978471">
         <i className="fa-brands fa-whatsapp"></i>
        </SocialComponent>
        <SocialComponent text="Gmail" href="mailto:arturohuari15@gmail.com">
         <i className="fa-solid fa-envelope"></i>
        </SocialComponent>
      </ul>
    </header>
  )
}

export default HeaderComponent
