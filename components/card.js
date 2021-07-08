export default function Card ( {children} ) {

    return (
        <div className="bg-primaryyellow border-black border-b-4 h-56 p-12 flex items-center justify-center">
            <p>{ children }</p>
        </div>
    )
}