import Image from 'next/image'


export default function Card ( {children} ) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 text-center my-12 uppercase">
            <div className="h-96 w-full flex flex-col items-center justify-end bg-black bg-opacity-30 hover:bg-opacity-0 transition duration-500 ease-in-out">
                <div className="w-full font-bold text-white">
                    <Image
                        src={contact.profileImage.url}
                    />
                    <h2>{contact.name}</h2>
                    <h2>{contact.telephone}</h2>
                    <h2>{contact.email}</h2>
                </div>
            </div>
        </div>
    )
}



