import Home from "../html/home/scripts"
import Purpose from "../html/purpose/scripts"
import BusinessIntelligence from "../html/business-intelligence/scripts"
import Clients from "../html/clients/scripts"
import Contact from "../html/contact/scripts"
import MobileSolution from "../html/mobile-solution/scripts"
import ProtheusConsultancy from "../html/protheus-consultancy/scripts"
import UncomplicatedTechnology from "../html/uncomplicated-technology/scripts"
import WebMobileErp from "../html/web-mobile-erp/scripts"
import WebSolution from "../html/web-solution/scripts"

import Navbar from "../components/navbar/scripts"
import Footer from "../components/footer/scripts"

function Render() {
  function sections() {
    BusinessIntelligence()
    Clients()
    Contact()
    Home()
    MobileSolution()
    ProtheusConsultancy()
    Purpose()
    UncomplicatedTechnology()
    WebMobileErp()
    WebSolution()
  }

  function components() {
    Navbar()
    Footer()
  }

  return { sections, components }
}

export default Render()
