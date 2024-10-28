import React from 'react'

export default function Main({ weather }) {
    return (
        <>
            <menu className=" bg-[#100e1d] w-full md:w-full md:m-auto px-5 md:flex md:flex-col md:items-center md:justify-center max-w-sm mt-12 gap-5 text-white md:max-w-none">
                <h2 className="text-2xl font-bold my-5">Today&apos;s Hightlights</h2>
                <div className="flex flex-col gap-4 md:grid md:gap-5 md:grid-cols-2 md:w-full md:max-w-2xl">
                    <div className="p-4 cuadro flex flex-col items-center gap-4 bg-[#1e213a]">
                        <h2>Wind status</h2>
                        <div className="flex gap-1 items-center">
                            <h3 className="text-6xl font-bold">{weather?.wind?.speed}</h3>
                            <h4 className="text-4xl">ms</h4>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="flex justify-center rounded-full bg-gray-500 w-8 h-8">
                                <img width={23} src="/images/navigation.svg" alt="navigation-image" />
                            </div>
                            <h3>SSE</h3>
                        </div>

                    </div>
                    <div className="p-4 cuadro flex flex-col items-center gap-4 bg-[#1e213a]">
                        <h2>Humidity</h2>
                        <div className="flex gap-1 items-center">
                            <h3 className="text-6xl font-bold">{weather?.main?.humidity
                            }</h3>
                            <h4 className="text-4xl">%</h4>
                        </div>
                        <div className="w-[70%] text-gray-400 font-semibold text-sm">
                            <div className="flex justify-between ">
                                <p>0</p>
                                <p>50</p>
                                <p>100</p>
                            </div>
                            <div className="h-2 mx-auto rounded-md bg-white">
                                <div className="bg-yellow-300 h-full rounded-md" style={{ width: `${weather?.main?.humidity}%` }} ></div>
                            </div>
                            <p className="flex justify-end">%</p>
                        </div>
                    </div>

                    <div className="p-4 cuadro flex flex-col items-center gap-4 bg-[#1e213a]">
                        <h2>Visibility</h2>
                        <div className="flex gap-1 items-center">
                            <h3 className="text-6xl font-bold">{(weather.visibility)?.toFixed(0)}</h3>
                            <h4 className="text-4xl">Km</h4>
                        </div>

                    </div>
                    <div className="p-4 cuadro flex flex-col items-center gap-4 bg-[#1e213a]">
                        <h2>Air Pressure</h2>
                        <div className="flex gap-1 items-center">
                            <h3 className="text-6xl font-bold">{weather?.main?.pressure}</h3>
                            <h4 className="text-4xl">mb</h4>
                        </div>

                    </div>
                </div>

            </menu>

        </>
    )
}

