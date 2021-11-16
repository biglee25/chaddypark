import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className="bg-white flex flex-col justify-between">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <div className="px-4">
        <h3 className="mb-3 text-3xl leading-snug">
          <a className="font-bold text-black">{title}</a>
        </h3>
        <div className="mb-4 text-lg">
          <Date dateString={date} />
        </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <button className="bg-black text-white hover:bg-gray-700 shadow-lg w-full px-24 md:px-12 py-5 my-8">
          Read More
        </button>
      </Link>

      </div>
    </div>
  )
}
