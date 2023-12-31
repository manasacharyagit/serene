
import './App.css'
import axios, { Axios } from 'axios'
import { useState } from 'react'
import Weather from './components/Weather'
import logo from './assets/serenelogo.svg'


function App() {
  
  const [data, setData] = useState(null)
  const [location, setLocation] = useState("")

  const API_KEY = 'f66f69695801f6ea790528228bdda49f'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchLocation= (event)=>{
    if(event.keyCode == 13){ {/* this means at the press of enter*/}
      axios.get(url)
      .then((response)=>
      {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }
  return (
    <div className='w-auto h-screen'>
      <img src={logo} className='w-[150px]' alt="" />
      <div className="text-center p-3">
        <input type="text" className='py-3 px-6 lg:w-[700px] w-auto text-lg rounded-3xl border border-gray-300
        text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-100 shadow-md'
         placeholder='Enter location'
         value={location}
         onChange={(event)=>setLocation(event.target.value)}
         onKeyDownCapture={searchLocation}
         />
      </div>
      
      {data !== null && <Weather weatherData={data} />}  
    </div>
  )
}

export default App
// id=524901
