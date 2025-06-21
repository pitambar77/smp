
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'

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
import Contactus from './pages/contactUs/ContactUs'
import Ebook from './pages/resources/Ebook'
import LetsGrowBussiness from './pages/letsGrow/LetsGrowBussiness'
import Socialmedia from './pages/services/socialmedia/Socialmedia'
import OrganicMarketing from './pages/services/organicMarketing/OrganicMarketing'
import Gallery from './components/Gallery'
import GetStartTraining from './pages/training/GetStartTraining'
import WebDesign from './pages/services/webDesign/WebDesign'
import Googleads from './pages/services/Sevicegoogleads/Googleads'
import Content from './pages/services/Contentmarketing/Content'
import AdminPanel from './pages/Admin/AdminPanel'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import ResetPassword from './pages/Auth/ResetPassword'
import FormComponent from './components/FormComponent'
import StrategyForm from './components/StrategyForm'
import GooglAdsPPCForm from './components/GooglAdsPPCForm'
import PaymentForm from './components/PaymentForm'




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout/>}>
        
        <Route path='' element={<Home/>}/>
        <Route path='about-us' element={<Ourcompany/>}/>
        <Route path='team' element={<Team/>}/>
        <Route path='review' element={<Review/>}/>
         <Route path='pricing' element={<Pricing/>}/>
         <Route path='our-clients' element={<OurClient/>}/>
         <Route path='training' element={<Training/>}/>
         <Route path='africanscenic-casestudy' element={<AfricanScenic/>}/>
         <Route path='lifetimesafari-casestudy' element={<LifetimeSafari/>}/>
         <Route path='jerrytanzaniatours-casestudy' element={<JerryTanzania/>}/>
         <Route path='falconsafaris-casestudy' element={<FalconSafari/>}/>
         <Route path='taitutour-case-study' element={<TaituTourCaseStudy/>}/>
         <Route path='capearchivestours-case-study' element={<CapeArchiveTours/>}/>
         <Route path='offwego-case-study' element={<OffwegoCaseStudy/>}/>
         <Route path='wowtravel-case-study' element={<WowTravelCaseStudy/>}/>
         <Route path='wildernessfirsttravel-case-study' element={<WildernessFirstTravel/>}/>
         <Route path='outdooradventures-case-study' element={<OutDoorAdventure/>}/>
         <Route path='africanluxurysafari-case-study' element={<AfricanluxurysafariCaseStudy/>}/>
         <Route path='contact-us' element={<Contactus/>}/> 
         <Route path='ebook' element={<Ebook/>}/> 
         <Route path='lets-grow-business' element={<LetsGrowBussiness/>}/> 
         <Route path='social-media-marketing' element={<Socialmedia/>}/> 
         <Route path='organic-marketing' element={<OrganicMarketing/>}/> 
         <Route path='get-start-for-training' element={<GetStartTraining/>}/> 
         <Route path='web-designing' element={<WebDesign/>}/> 
          <Route path='privacy-policy' element={<Privacy/>}/>
         <Route path='google-ads' element={<Googleads/>}/> 
         <Route path='content-marketing' element={<Content/>}/> 
          <Route path='contact-us' element={<Contactus/>}/> 
          <Route path='form-component' element={<FormComponent/>} />
          <Route path='contacts' element={<StrategyForm/>}/>
          

          
          
      </Route>
      
    <Route path='/contacts-form' element={<GooglAdsPPCForm/>}/>
       <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/forgot-password" element={<ResetPassword />} />
          <Route path="/payment" element={<PaymentForm/>} />
      
      <Route
          path="/admin"
          element={
      <ProtectedRoute requiredRole="admin">
        <AdminPanel />
      </ProtectedRoute>
    }
  />

      </> 
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
  </>
    
  )
}

export default App
