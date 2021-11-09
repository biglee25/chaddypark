import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <section className="bg-white">
      <div className="mb-8 md:mb-16 text-lg ">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <div className="mb-20 md:grid md:grid-cols-1 md:col-gap-16 lg:col-gap-8 md:mb-28 p-5">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl font-bold">
            {title}
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
        </div>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <button className="bg-gray-800 text-white hover:bg-gray-600 w-full md:w-56 px-24 md:px-12 py-5 my-8">
                Read More
              </button>
            </Link>

      </div>
    </section>
  )
}
