export default function PostTitle({ children }) {
  return (
    <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none md:leading-none mb-12">
      {children}
    </h1>
  )
}
