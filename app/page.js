export default function Home() {
  return (
    <>
      <div className="fondo flex flex-col md:flex-row w-screen">

        <aside className="fondo w-screen h-screen min-w-80 md:w-[30%]">
          <div className="flex items-end w-full h-16 justify-around text-white">
            <button className="rounded-sm bg-gray-500 h-9 w-44">Search for Places</button>
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

        <section className="bg-[#100e1d] w-full flex flex-col items-center md:w-[70%]">

          <div className="flex font-semibold justify-end items-end gap-5 h-20">
            <button className="rounded-full bg-white text-xl px-3 py-2 ">°C</button>
            <button className="rounded-full bg-gray-600 text-xl px-3 py-2 text-white">°F</button>
          </div>
          <div className="md:px-5">
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
          <menu className=" bg-[#100e1d] w-full md:w-full md:m-auto px-5 md:flex md:flex-col md:items-center md:justify-center max-w-sm mt-12 gap-5 text-white">
            <h2 className="text-2xl font-bold my-5">Today&apos;s Hightlights</h2>
            <div className="flex md:gap-5 md:grid md:grid-cols-2 md:w-full">
              <div className="p-4 cuadro flex flex-col items-center gap-4 bg-[#1e213a] ">
                <h2>Wind status</h2>
                <div className="flex gap-1 items-center">
                  <h3 className="text-6xl font-bold">5.66</h3>
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
                  <h3 className="text-6xl font-bold">85</h3>
                  <h4 className="text-4xl">%</h4>
                </div>
                {/* FALTA DISEÑO DE TERMOMETRO */}
              </div>
              <div className="p-4 cuadro flex flex-col items-center gap-4 bg-[#1e213a]">
                <h2>Visibility</h2>
                <div className="flex gap-1 items-center">
                  <h3 className="text-6xl font-bold">10.00</h3>
                  <h4 className="text-4xl">Km</h4>
                </div>

              </div>
              <div className="p-4 cuadro flex flex-col items-center gap-4 bg-[#1e213a]">
                <h2>Air Pressure</h2>
                <div className="flex gap-1 items-center">
                  <h3 className="text-6xl font-bold">1013</h3>
                  <h4 className="text-4xl">mb</h4>
                </div>

              </div>
            </div>


          </menu>
        </section>

      </div>

    </>
  );
}
