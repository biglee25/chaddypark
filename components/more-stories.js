import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-tight text-center">
        Club News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-16 lg:gap-x-4 gap-y-20 md:gap-y-12 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
