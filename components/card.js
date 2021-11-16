import Link from 'next/link'


export default function Card ( {children} ) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 text-center my-12 uppercase">
            <div className="bg-teams-bg bg-top bg-cover bg-no-repeat col-span-2">
                <Link href="/teams">
                    <a>
                    <div className="h-96 w-full flex flex-col items-start justify-end bg-black bg-opacity-10 hover:bg-opacity-0 transition duration-500 ease-in-out">
                        <div className="w-full text-white">
                            <h2 className="bg-black bg-opacity-60 font-medium">Football Teams</h2>
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            <div className="bg-disablity-bg bg-right bg-cover bg-no-repeat col-span-2 md:col-span-1 md:row-span-2">
                <Link href="/pan-disability">
                    <a>
                    <div className="h-96 md:h-full w-full flex flex-col items-center justify-end bg-black bg-opacity-30 hover:bg-opacity-0 transition duration-500 ease-in-out">
                        <div className="w-full text-white">
                            <h2 className="bg-black bg-opacity-60 font-medium">Pan Disability Football</h2>
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            <div className="bg-netball-bg bg-center bg-cover bg-no-repeat col-start-1 md:col-start-1 col-span-2 md:col-span-2">
                <Link href="/netball">
                    <a>
                    <div className="h-96 w-full flex flex-col items-center justify-end bg-black bg-opacity-30 hover:bg-opacity-0 transition duration-500 ease-in-out">
                        <div className="w-full text-white">
                            <h2 className="bg-black bg-opacity-60 font-medium">Netball Teams</h2>
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            <div className="bg-adultfun-bg bg-center bg-cover bg-no-repeat col-start-1 md:col-start-1 col-span-2 md:col-span-1">
                <Link href="/adult-fun">
                    <a>
                    <div className="h-96 w-full flex flex-col items-center justify-end bg-black bg-opacity-30 hover:bg-opacity-0 transition duration-500 ease-in-out">
                        <div className="w-full text-white">
                            <h2 className="bg-black bg-opacity-60 font-medium">Adult Fun</h2>
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            <div className="bg-steppers-bg bg-center bg-cover bg-no-repeat col-start-1 md:col-start-2 col-span-2 md:col-span-2">
                <Link href="/steppers-walkers">
                    <a>
                    <div className="h-96 w-full flex flex-col items-center justify-end bg-black bg-opacity-30 hover:bg-opacity-0 transition duration-500 ease-in-out">
                        <div className="w-full text-white">
                            <h2 className="bg-black bg-opacity-60 font-medium">Steppers / Walkers Group</h2>
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            <div className="bg-voluntaryjobs-bg bg-center bg-cover bg-no-repeat col-start-1 md:col-start-1 col-span-1 md:col-span-1">
                <Link href="/jobs">
                    <a>
                    <div className="h-96 w-full flex flex-col items-center justify-end bg-black bg-opacity-30 hover:bg-opacity-0 transition duration-500 ease-in-out">
                        <div className="w-full text-white">
                            <h2 className="bg-black bg-opacity-60 font-medium">Volutary Jobs</h2>
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            <div className="bg-photocomp-bg bg-top bg-cover bg-no-repeat col-start-1 md:col-start-2 col-span-1">
                <Link href="/photos">
                    <a>
                    <div className="h-96 w-full flex flex-col items-center justify-end bg-black bg-opacity-30 hover:bg-opacity-0 transition duration-500 ease-in-out">
                        <div className="w-full text-white">
                            <h2 className="bg-black bg-opacity-60 font-medium">Photos</h2>
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            <div className="bg-community-bg bg-top bg-cover bg-no-repeat col-start-1 md:col-start-3 col-span-1">
                <Link href="/community">
                    <a>
                    <div className="h-96 w-full flex flex-col items-center justify-end bg-black bg-opacity-30 hover:bg-opacity-0 transition duration-500 ease-in-out">
                        <div className="w-full text-white">
                            <h2 className="bg-black bg-opacity-60 px-2 lg:px-0 font-medium">Community Engagement</h2>
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}



