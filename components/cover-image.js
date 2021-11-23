import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <Image
      width={2000}
      height={1000}
      layout="responsive"
      alt={`Cover Image for ${title}`}
      src={url}
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
