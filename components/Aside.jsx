import React, { useState } from 'react'
import dayjs from 'dayjs';
import useGeolocation from '@/hooks/useGeolocation';
import Icons from './Icons';

const Aside = ({ newLocation, toggleMenu, className, weather, icon }) => {
    const [city, setCity] = useState('');
    const { getGeo, geolocation: geo } = useGeolocation()
    const key = `ca566c012576a5f51d68d5b206b4f78c
`
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.long}&appid=${key}`

    // Obtener texto del input//
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ city });
        if (city === "" || !city)
            return;

        newLocation(city);
    }

    const dt = weather?.dt;
    const dt1 = dt * 1000;
    const date = dayjs(dt1);

    return (
        <>
            <aside className="relative fondo w-screen h-screen min-w-80 md:w-[30%]">
                <div className="flex items-end w-full h-16 justify-around text-white">
                    <button onClick={toggleMenu} className="rounded-sm bg-gray-500 h-9 w-44">Search for Places</button>
                    <button onClick={getGeo} className="bg-gray-600 rounded-full p-2">
                        <img src="images/location.svg" height={25} width={25} alt="" />
                    </button>
                </div>
                <div className="flex flex-col items-center text-white gap-8">
                    <div className="flex w-full bg-cover bg-center h-52 lg:h-72 relative justify-center items-center">
                        <img className='absolute opacity-10' src='/images/others/Cloud-background.png' />
                        <div>
                            <img width={150} src={Icons(icon)} alt="icon" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <h2 className="text-9xl font-medium">{(weather?.main?.temp - 273.15).toFixed(0)}</h2>
                        <h3 className="text-6xl opacity-50">°C</h3>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-400">{weather?.weather?.[0]?.description}</h2>
                    </div>
                    <div>
                        <p className="text-gray-400">Today . {date?.format(' MM-DD YYYY')}</p>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <img width={21} src="/images/location_on.svg" />
                        <h3 className="text-gray-400 font-sans">{weather.name}</h3>
                    </div>
                </div>

            </aside>
            <nav className={`absolute fondo w-screen h-screen min-w-80 md:w-[30%] ${className}`}>
                <div className="flex flex-col p-4 text-gray-300 gap-5">
                    <div onClick={toggleMenu} className="flex w-full justify-end px-2 text-5xl font-extralight cursor-pointer hover:text-white" >&times;</div>
                    <form onSubmit={onSubmit} className="flex justify-around">
                        <div className="flex search border rounded-sm border-white md:w-[180px] xl:w-[250px] hover:border-2">
                            <img className="mx-2" width={24} src="/images/search.svg" alt="" />
                            <input type="text" className="w-full bg-transparent outline-none" placeholder="search location" onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <button onClick={toggleMenu} type='submit' className="rounded-sm px-3 py-1.5 font-bold bg-[#3c47e9] hover:bg-[#3c48e9a1]">
                            Search
                        </button>
                    </form>
                </div>

            </nav>
        </>
    );

}
export default Aside;