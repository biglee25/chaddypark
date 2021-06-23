import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
        <div className="min-h-screen px-4">
          <main>{children}</main>
        </div>
      <Footer />
    </>
  )
}
