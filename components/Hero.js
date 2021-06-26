import Image from'next/image'

export default function Hero() {
  return (
    <div className="bg-hero-bg bg-cover bg-no-repeat bg-center w-full">
      <div className="bg-black bg-opacity-30">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="flex flex-col w-full h-screen lg:w-1/2 justify-center items-start pt-12 pb-24 px-6 text-white">
                    <h1 className="font-bold text-5xl my-4">Chadderton Park Sports Club</h1>
                    <p className="leading-normal mb-4">FA Club of the Year, UEFA runners up, Chadderton Park Sports Club, 92 Football teams,1000 players,13 Netball, Vets League, Cerebral Palsy football. Queens Award</p>
                    <button className="bg-transparent hover:bg-gray-900 text-gray-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-300 hover:border-transparent">Find out more</button>
                </div>
            <div className="w-full lg:w-1/2 lg:py-6 text-center hidden md:block">
            <Image
                    src="/images/chaddy-logo.svg"
                    alt="Chadderton Park Sports Club"
                    width={500}
                    height={500}
                />
            </div>
        </div>
      </div>
    </div>
  )
}

