import React from 'react'
import logo from '../assets/serenelogo.svg'

export const Weather = ({weatherData}) => {
    
  return (
    <div className='mt-10'>
        <div>
        </div>
        {/* {weatherData && weatherData.weather ? ( */}
            <div className='w-auto lg:w-[500px`] h-auto bg-blue-900 justify-center items-center text-white shadow-lg rounded-xl m-auto relative px-8 top-[10%] bottom-[10%] overflow-hidden'>
                <div className='flex justify-between w-full'>
                    <div className='w-1/2 my-4 mx-auto flex justify-between items-center'>
                        <div className="flex flex-col item-start justify-between h-full">
                            <div>
                                <p className='text-3xl p-2'>
                                    {weatherData.name}
                                    ({weatherData.sys.country})
                                </p>
                                <p className="text-l">
                                    {weatherData.weather[0].description}
                                </p>
                            </div>
                            <div>
                                <h1 className="text-6xl font-semibold">
                                    {weatherData.main.temp.toFixed()}&deg; C
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 flex flex-col justify-between items-end">
                        <div className="relative">
                            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                            className=' w-[120px]'
                            alt="" />
                        </div>
                        {weatherData.name!==undefined?(
                            <div className="flex flex-col justify-evenly gap-y-2 my-2 mx-auto text-s">
                                <div className="flex-justify-between gap-x-8">
                                    <p>Feels like</p>
                                    <p className="font-bold w-2-">
                                        {weatherData.main.feels_like.toFixed()}&deg; C
                                    </p>
                                </div>
                                <div className="flex-justify-between gap-x-8">
                                    <p>Humidity</p>
                                    <p className="font-bold w-2-">
                                        {weatherData.main.humidity}%
                                    </p>
                                </div>
                                <div className="flex-justify-between gap-x-8">
                                    <p>Wind Speed</p>
                                    <p className="font-bold w-2-">
                                        {weatherData.wind.speed.toFixed()} KPH
                                    </p>
                                </div>
                                <div className="flex-justify-between gap-x-8">
                                    <p>Pressure</p>
                                    <p className="font-bold w-2-">
                                        {weatherData.main.pressure} hPa
                                    </p>
                                </div>
                            </div>
                        ):null}


                    </div>



                </div>
            </div>
        {/* ): 'hey prabhu'} */}
    </div>
  )
}
export default Weather