export default function Card ( {children} ) {

    return (
        <div className="h-56 w-full flex flex-col items-center justify-end">
            { children }
        </div>
    )
}