import Link from 'next/link'


export default function Card ( {children} ) {

    return (
        <div className="grid md:grid-cols-3 gap-4 text-center my-12 uppercase">
            <div className="bg-teams-bg bg-center bg-cover bg-no-repeat rounded-lg">
                <Link href="/teams">
                    <a>
                    <div className="h-56 w-full flex flex-col items-center justify-end">
                        <div className="w-full font-bold bg-primaryyellow text-black p-2 flex items-end justify-center hover:bg-primarygreen transition duration-500 ease-in-out">
                            Football Teams
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            <div className="bg-disablity-bg bg-center bg-cover bg-no-repeat rounded-lg">
                <Link href="/teams">
                    <a>
                    <div className="h-56 w-full flex flex-col items-center justify-end">
                        <div className="w-full font-bold bg-primaryyellow text-black p-2 flex items-end justify-center hover:bg-primarygreen transition duration-500 ease-in-out">
                            Pan Disabilty Football
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            <div className="bg-adultfun-bg bg-center bg-cover bg-no-repeat rounded-lg">
                <Link href="/teams">
                    <a>
                    <div className="h-56 w-full flex flex-col items-center justify-end">
                        <div className="w-full font-bold bg-primaryyellow text-black p-2 flex items-end justify-center hover:bg-primarygreen transition duration-500 ease-in-out">
                            Adult Fun
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            <div className="bg-steppers-bg bg-center bg-cover bg-no-repeat rounded-lg">
                <Link href="/teams">
                    <a>
                    <div className="h-56 w-full flex flex-col items-center justify-end">
                        <div className="w-full font-bold bg-primaryyellow text-black p-2 flex items-end justify-center hover:bg-primarygreen transition duration-500 ease-in-out">
                            Steppers / Walkers Group
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            <div className="bg-community-bg bg-center bg-cover bg-no-repeat rounded-lg">
                <Link href="/teams">
                    <a>
                    <div className="h-56 w-full flex flex-col items-center justify-end">
                        <div className="w-full font-bold bg-primaryyellow text-black p-2 flex items-end justify-center hover:bg-primarygreen transition duration-500 ease-in-out">
                        Community Engagement
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
            <div className="bg-voluntaryjobs-bg bg-center bg-cover bg-no-repeat rounded-lg">
                <Link href="/teams">
                    <a>
                    <div className="h-56 w-full flex flex-col items-center justify-end">
                        <div className="w-full font-bold bg-primaryyellow text-black p-2 flex items-end justify-center hover:bg-primarygreen transition duration-500 ease-in-out">
                        Volutary Jobs Available
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}



