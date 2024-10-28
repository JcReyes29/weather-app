'use client'
import Weather from "@/components/Weather";

export default function Home() {

  return (
    <>
      <div className="fondo flex flex-col md:flex-row w-screen">
        <Weather />
      </div>

    </>
  );
}
