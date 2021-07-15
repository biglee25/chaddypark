import Link from 'next/link'

export default function Hero() {
  return (
    <section className="container mx-auto px-2 mt-5 md:mt-10 lg:mt-16">
        <div className="bg-hero-bg bg-cover bg-top bg-no-repeat">
          <div className="bg-black bg-opacity-30">
            <div className="container mx-auto flex flex-col md:flex-row items-center">  
                <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6 text-white">
                    <h1 className="font-bold text-5xl my-4">Chadderton Park Sports Club</h1>
                    <p className="leading-normal mb-4">FA Club of the Year, UEFA runners up, 92 Football teams, 1000 players, 13 Netball, Vets League, Cerebral Palsy football. Proud Winners Queens Award Winners 2017</p>
                    <Link href="/about">
                      <button className="bg-primaryyellow hover:bg-gray-900 text-black hover:text-white rounded shadow hover:shadow-lg py-2 px-4">Find out more</button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

