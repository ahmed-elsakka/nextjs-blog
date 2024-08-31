import '../app/globals.css';
import Link from 'next/link';

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.API_URL}/posts`);
    const posts = await res.json();

    return {
      props: { posts },
    };
  } catch (error) {
    console.log("Failed to fetch posts: ", error);
    return {
      props: { posts: [] },
    };
  }
}

export default function PostPage(props) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <Link href="/add-post" legacyBehavior>
        <a className='inline-block mb-4 px-4 py-2 bg-green-500 text-white rounded-md'>Add a Post</a>
      </Link>
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {props.posts.map((post) => (
          <li
            key={post.id}
            className="bg-white rounded shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <small className="text-gray-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
