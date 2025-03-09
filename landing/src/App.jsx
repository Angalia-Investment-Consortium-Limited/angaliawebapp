

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FrappeProvider  } from 'frappe-react-sdk'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import "./bootstrap.css"
import "./style.css"
import "./icomoon-3.css"
import "./responsive.css"
import './color-5.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import KuhusuTeam from './pages/TeamPage'
import Kuhusuaicl from './pages/AboutUs'
import BusinessProcessTechnologyOptimization from './pages/Service'
import CepraPage from './pages/Cepra'
import MobileAppDevelopment from './pages/MobileAppDevelopment'
import WebDesignDevelopment from './pages/WebDesignDevelopment'
import UiUxDesign from './pages/UiUxDesign'
import Pism from './pages/Pism'
import CallCenterSetup from './pages/CallCenterSetup'
import AccountingFinancing from './pages/AccountingFinancing'
import AgritechSolution from './pages/AgritechSolutions'
import Shuleni from './pages/products/Shuleni'
import AfroElegance from './pages/products/AfroElegance'




function App() {
  

  return (
	
     


	<FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ?? ''} > 
	
	<BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
	<Routes>
		<Route path='/' element={ <Home /> } />
		<Route path='/contactus-page' element={ <ContactPage />} />
		<Route path='/aicl-team' element={ <KuhusuTeam />} />
		<Route path='/aicl-about' element={ <Kuhusuaicl /> }  />
		<Route path='/business-process-and-technology-optimization' element={ <BusinessProcessTechnologyOptimization /> } />
		<Route path='/customization-enterprise-resource-plannig' element={ <CepraPage />}   />
		<Route path='/mobile-app-development' element={ <MobileAppDevelopment />} />
		<Route path='/web-design-development' element={ <WebDesignDevelopment />}  />
		<Route path='/ui-ux-design'  element={ <UiUxDesign />}    />
		<Route path='/physical-security-information-management' element={ <Pism /> } /> 
		<Route path='/call-center-setup' element={ <CallCenterSetup /> } />
		<Route path='/accounting-finance-outsourcing' element={ <AccountingFinancing /> }  />
		<Route path='/agritech-solutions' element={ <AgritechSolution />} />
		<Route path='/shuleni' element={ <Shuleni />} />
		<Route path='/afroelegance' element={ <AfroElegance /> } />
		
		


		
	</Routes>
	</BrowserRouter>
		
	</FrappeProvider>
	
  )
}

export default App
