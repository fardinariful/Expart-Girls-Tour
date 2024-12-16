
import './App.css'
import Banner from './Components/Banner/Banner'
import Expertise from './Components/Expertise'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import HowWork from './Components/HowWork'
import Member from './Components/Member'
import Package from './Components/Package'


function App() {
 

  return (
    <div className='bg-base-200'>
      
     <Banner></Banner>
     <Member></Member>
     <Package></Package>
     <Expertise></Expertise>
     <HowWork></HowWork>
     <FAQ></FAQ>
     <Footer></Footer>

   
    </div>
  )
}

export default App
