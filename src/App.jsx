import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HeaderComponent from './components/Header/HeaderComponent'
import IntroductionComponent from './components/Intro/IntroductionComponent'
import WeeksComponents from './components/Weeks/WeeksComponent'
import AboutMeComponent from './components/AboutMe/AboutMeComponent'
import LabsComponents from './components/Labs/LabsComponents'
import ConclusionComponent from './components/Conclusion/ConclusionComponent'
import ReflectionComponent from './components/Reflection/ReflectionComponent'
import BibliographyComponent from './components/Bibliography/BibliographyComponent'

import Week1Component from './components/Week/Week1Component'
import Week2Component from './components/Week/Week2Component'
import Week3Component from './components/Week/Week3Component'
import Week4Component from './components/Week/Week4Component'
import Week5Component from './components/Week/Week5Component'
import Week6Component from './components/Week/Week6Component'
import Week7Component from './components/Week/Week7Component'

import Week9Component from './components/Week/Week9Component'
import Week10Component from './components/Week/Week10Component'
import Week11Component from './components/Week/Week11Component'
import Week12Component from './components/Week/Week12Component'
import Week13Component from './components/Week/Week13Component'
import Week14Component from './components/Week/Week14Component'
import Week15Component from './components/Week/Week15Component'

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

            <Route path='/portafolio-react/week1' element={ <Week1Component/> }/> 
            <Route path='/portafolio-react/week2' element={ <Week2Component/> }/> 
            <Route path='/portafolio-react/week3' element={ <Week3Component/> }/> 
            <Route path='/portafolio-react/week4' element={ <Week4Component/> }/> 
            <Route path='/portafolio-react/week5' element={ <Week5Component/> }/> 
            <Route path='/portafolio-react/week6' element={ <Week6Component/> }/> 
            <Route path='/portafolio-react/week7' element={ <Week7Component/> }/> 

            <Route path='/portafolio-react/week9' element={ <Week9Component/> }/> 
            <Route path='/portafolio-react/week10' element={ <Week10Component/> }/> 
            <Route path='/portafolio-react/week11' element={ <Week11Component/> }/> 
            <Route path='/portafolio-react/week12' element={ <Week12Component/> }/> 
            <Route path='/portafolio-react/week13' element={ <Week13Component/> }/> 
            <Route path='/portafolio-react/week14' element={ <Week14Component/> }/> 
            <Route path='/portafolio-react/week15' element={ <Week15Component/> }/> 
          </Routes>
          </main>
        </Router>
    </>
  )
}

export default App
