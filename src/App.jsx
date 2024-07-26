import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HeaderComponent from './components/Header/HeaderComponent'
import IntroductionComponent from './components/Intro/IntroductionComponent'
import WeeksComponents from './components/Weeks/WeeksComponent'
import AboutMeComponent from './components/AboutMe/AboutMeComponent'
import LabsComponents from './components/Labs/LabsComponents'
import ConclusionComponent from './components/Conclusion/ConclusionComponent'
import ReflectionComponent from './components/Reflection/ReflectionComponent'
import BibliographyComponent from './components/Bibliography/BibliographyComponent'

function App() {

  return (
    <>
        <Router>
        <HeaderComponent />
          <main className="pt-24 lg:w-1/2 lg:py-8">
          <Routes>
            <Route path='/portafolio-react/' element={ <IntroductionComponent/> }/> 
            <Route path='/portafolio-react/intro' element={ <IntroductionComponent/> }/> 
            <Route path='/portafolio-react/weeks' element={ <WeeksComponents/> }/> 
            <Route path='/portafolio-react/about-me' element={ <AboutMeComponent/> }/> 
            <Route path='/portafolio-react/labs' element={ <LabsComponents/> }/> 
            <Route path='/portafolio-react/conclusion' element={ <ConclusionComponent/> }/> 
            <Route path='/portafolio-react/reflection' element={ <ReflectionComponent/> }/> 
            <Route path='/portafolio-react/bibliography' element={ <BibliographyComponent/> }/> 
          </Routes>
          </main>
        </Router>
    </>
  )
}

export default App
