import { fetchData } from "@/utilities/fetchData";
import React, { useState } from "react";
import Aside from "./Aside";
import Week from "./Week";
import Main from "./Main";

const Weather = () => {
    let key = `ca566c012576a5f51d68d5b206b4f78c`
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${key}`;

    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${key}`;

    let urlCity = "&q="

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState(false);
    const [location, setLocation] = useState('');
    const [icon, setIcon] = useState('');

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        /* WEATHER */

        urlWeather = urlWeather + urlCity + loc;

        fetchData(urlWeather)
            .then((rs) => {
                setWeather(rs);
                setIcon(rs.weather[0].icon)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                setView(false)
            });

        /* FORECAST */

        urlForecast = urlForecast + urlCity + loc;

        fetchData(urlForecast)
            .then((rs) => {
                setForecast(rs);
                setIcon(rs.weather[0].main)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                setView(false)
            });
    }

    function toggleMenu() {
        setView(!view);

    }
    return (

        <>
            <Aside
                newLocation={getLocation}
                toggleMenu={toggleMenu}
                className={`${!view && 'hidden'}`}
                weather={weather}
                icon={icon}
            />
            <section className="bg-[#100e1d] w-full flex flex-col items-center md:w-[70%]">

                <div className="flex font-semibold justify-end items-end gap-5 h-20">
                    <button className="rounded-full bg-white text-xl px-3 py-2 ">°C</button>
                    <button className="rounded-full bg-gray-600 text-xl px-3 py-2 text-white">°F</button>
                </div>
                <Week forecast={forecast} />
                <Main weather={weather}
                setLoading={loading} />
            </section>

        </>
    )
}
export default Weather;
