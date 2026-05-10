import './App.css'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/DaisyNav/NavBar/NavBar'
import LineChart from './components/LineChart/LineChart'

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
     

     
    </>
  )
}

export default App
