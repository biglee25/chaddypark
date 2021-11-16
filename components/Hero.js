import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="mx-auto md:px-2 md:mt-10 lg:mt-12">
        <div className="h-full mx-auto container bg-hero-bg bg-cover bg-center bg-no-repeat">
          <div className="bg-black bg-opacity-30">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left">  
                <div className="flex flex-col w-full lg:w-1/2 justify-center items-center md:items-start pt-12 pb-24 px-6 text-white">
                    <h1 className="font-bold text-5xl my-4">Chadderton Park Sports Club</h1>
                    <p className="leading-normal mb-4">FA Club of the Year, UEFA runners up, 92 Football teams, 1000 players, 13 Netball, Vets League, Cerebral Palsy football.</p>
                    <p className="mb-4">Proud Winners of the Queens Award 2017</p>
                    <Link href="/about">
                      <button className="bg-black text-white hover:bg-white hover:text-black shadow-lg w-full md:w-56 px-24 md:px-12 py-5 my-8">Find out more</button>
                    </Link>
                </div>
                <div className="p-12 mx-auto hidden md:block">
                <Image
                  src="/images/queens-award.png"
                  alt="Queens Award for Voluntary Service"
                  width={250}
                  height={300}
                />
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

