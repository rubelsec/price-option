import './App.css'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/DaisyNav/NavBar/NavBar'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'

function App() {
  

  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
      

    <h1 className='text-5xl bg-rose-600'>
       Vite+React
    </h1>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <Phones></Phones>
     

     
    </>
  )
}

export default App
