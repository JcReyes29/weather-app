import React, { useState } from 'react'

export default function Aside() {
    const [view, setView] = useState(false)

    function toggleMenu() {
        setView(!view);

    }
    return (
        <>
            <aside className="relative fondo w-screen h-screen min-w-80 md:w-[30%]">
                <div className="flex items-end w-full h-16 justify-around text-white">
                    <button onClick={toggleMenu} className="rounded-sm bg-gray-500 h-9 w-44">Search for Places</button>
                    <div className="bg-gray-600 rounded-full p-2 cursor-pointer">
                        <img src="images/location.svg" height={25} width={25} alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-center text-white gap-8">
                    <div className="flex fondo-image w-full bg-cover bg-center h-52 lg:h-72 relative justify-center items-center">
                        <div className="absolute">
                            <img width={150} src="/images/weather/02n.png" alt="" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <h2 className="text-9xl font-medium">19</h2>
                        <h3 className="text-6xl opacity-50">°C</h3>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-400">Few Clouds</h2>
                    </div>
                    <div>
                        <p className="text-gray-400">Today . Mon,21 Oct</p>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <img width={21} src="/images/location_on.svg" />
                        <h3 className="text-gray-400 font-sans">Lima</h3>
                    </div>
                </div>

            </aside>
            <nav className={`absolute fondo w-screen h-screen min-w-80 md:w-[30%] ${!view && 'hidden'}`}>
                <div className="flex flex-col p-4 text-gray-300 gap-5">
                    <div onClick={toggleMenu} className="flex w-full justify-end px-2 text-5xl font-extralight cursor-pointer hover:text-white" >&times;</div>
                    <div className="flex justify-around">
                        <div className="flex search border rounded-sm border-white md:w-[180px] xl:w-[250px] hover:border-2">
                            <img className="mx-2" width={24} src="/images/search.svg" alt="" />
                            <input type="text" className="w-full bg-transparent outline-none" placeholder="search location" />
                        </div>
                        <button className="rounded-sm px-3 py-1.5 font-bold bg-[#3c47e9] hover:bg-[#3c48e9a1]">
                            Search
                        </button>
                    </div>
                </div>

            </nav>
        </>
    )
}
