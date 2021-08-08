import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primaryyellow text-black">
      <Container>
        <div className="py-28 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-center mb-5">
          © {new Date().getFullYear()} chaddertonparkfc.co.uk
          </h3>
          <h4>
            Affiliation No..W-Man2950 | Club ID 66741
          </h4>
          <div className="text-black hover:text-gray-700 flex flex-col justify-center items-center lg:pl-4  mt-12">
            <a href="https://invadedbypixels.com">Website by Invaded by Pixels</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
