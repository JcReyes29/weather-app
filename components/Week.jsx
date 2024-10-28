import React, { useEffect, useState } from 'react'

export default function Week() {

    return (
        <>
            <div className="md:px-5 WEEK">
                <ul className="grid grid-cols-2 md:grid-cols-3 mx-auto md:flex md:flex-row md:flex-wrap md:gap-4 gap-5 mt-5 md:max-w-2xl">
                    <li className="flex flex-col items-center gap-6 bg-[#1e213a] h-40 w-28">
                        <h3 className="text-white mt-3">Tomorrow</h3>
                        <div>
                            <img src="/images/weather/03n.png" width={56} alt="time-weather" />
                        </div>
                        <div className="flex gap-2">
                            <p className="text-white">21°C</p>
                            <p className="text-gray-400">17°C</p>
                        </div>
                    </li>
                    <li className="flex flex-col items-center gap-6 bg-[#1e213a] h-40 w-28">
                        <h3 className="text-white mt-3">Tomorrow</h3>
                        <div>
                            <img src="/images/weather/03n.png" width={56} alt="time-weather" />
                        </div>
                        <div className="flex gap-2">
                            <p className="text-white">21°C</p>
                            <p className="text-gray-400">17°C</p>
                        </div>
                    </li>
                    <li className="flex flex-col items-center gap-6 bg-[#1e213a] h-40 w-28">
                        <h3 className="text-white mt-3">Tomorrow</h3>
                        <div>
                            <img src="/images/weather/03n.png" width={56} alt="time-weather" />
                        </div>
                        <div className="flex gap-2">
                            <p className="text-white">21°C</p>
                            <p className="text-gray-400">17°C</p>
                        </div>
                    </li>
                    <li className="flex flex-col items-center gap-6 bg-[#1e213a] h-40 w-28">
                        <h3 className="text-white mt-3">Tomorrow</h3>
                        <div>
                            <img src="/images/weather/03n.png" width={56} alt="time-weather" />
                        </div>
                        <div className="flex gap-2">
                            <p className="text-white">21°C</p>
                            <p className="text-gray-400">17°C</p>
                        </div>
                    </li>
                    <li className="flex flex-col items-center gap-6 bg-[#1e213a] h-40 w-28">
                        <h3 className="text-white mt-3">Tomorrow</h3>
                        <div>
                            <img src="/images/weather/03n.png" width={56} alt="time-weather" />
                        </div>
                        <div className="flex gap-2">
                            <p className="text-white">21°C</p>
                            <p className="text-gray-400">17°C</p>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    )
}
