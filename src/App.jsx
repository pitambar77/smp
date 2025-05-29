
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Layout from './Layout'
import AfricanluxurysafariCaseStudy from './pages/africanluxurysafari-case-study/AfricanluxurysafariCaseStudy'
import AfricanScenic from './pages/AfricanScenicCaseStudy/AfricanScenic'
import CapeArchiveTours from './pages/capeArchivesTours/CapeArchiveTours'
import FalconSafari from './pages/falconSafariCaseStudy/FalconSafari'
import JerryTanzania from './pages/jerryTanzania/JerryTanzania'
import LifetimeSafari from './pages/lifetimeSafari/LifetimeSafari'
import OffwegoCaseStudy from './pages/offwegoCaseStudy/OffwegoCaseStudy'
import OurClient from './pages/ourClient/OurClient'
import OutDoorAdventure from './pages/outdoorAdventure/OutDoorAdventure'
import Pricing from './pages/pricing/Pricing'
import Privacy from './pages/privacy/Privacy'
import Review from './pages/review/Review'
import TaituTourCaseStudy from './pages/taituTour/TaituTourCaseStudy'
import Team from './pages/team/Team'
import Training from './pages/training/Training'
import WildernessFirstTravel from './pages/wildernessFirstTravel/WildernessFirstTravel'
import WowTravelCaseStudy from './pages/wowtravelCaseStudy/WowTravelCaseStudy'
import Home from './pages/home/Home'
import Ourcompany from './pages/About/OurCompany'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        
        <Route path='' element={<Home/>}/>
        <Route path='about-us' element={<Ourcompany/>}/>
        <Route path='team' element={<Team/>}/>
        <Route path='review' element={<Review/>}/>

      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
  </>
    
  )
}

export default App
