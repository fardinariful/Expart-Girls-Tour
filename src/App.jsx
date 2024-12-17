
import './App.css'
import Banner from './Components/Banner/Banner'
import Expertise from './Components/Expertise'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import HowWork from './Components/HowWork'
import Member from './Components/Member'
import Package from './Components/Package'
import Reviews from './Components/Reviews'


function App() {
 

  return (
    <div className='bg-gray-200 montserrat'>
      
     <Banner></Banner>
      <Member></Member>
     <Package></Package>
     <Expertise></Expertise>
     <HowWork></HowWork>
     <Reviews></Reviews>
     <FAQ></FAQ>
     <Footer></Footer> 

   
    </div>
  )
}

export default App
