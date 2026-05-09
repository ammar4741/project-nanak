import { Link } from "react-router-dom";
import posts from "../Data/posts";

const Blog = () => {
  return (
    <div className="bg-[#F0DBDB]">
      <div id="blog" className="container mx-auto text-black">
        <h2 className="text-2xl font-bold text-center underline underline-offset-8 py-5">
          News & Updates
        </h2>

        <div className="p-1 md:grid grid-cols-2 gap-5 lg:grid-cols-3 max-h-[400px] overflow-y-auto px-2 scrollbar-thin">
          {posts.map((post) => (
            <article
              key={post.id}
              className="mb-4 bg-gray-100 rounded-xl shadow-xl shadow-gray-400 p-2"
            >
              <h3 className="font-semibold text-lg">
                {post.title}
              </h3>

              <p className="mt-2 text-gray-800">
                {post.desc}
              </p>

              <Link
                to={`/blog/${post.id}`}
                aria-label={`Read more about ${post.title}`}
                className="text-green-600 flex justify-end mt-4"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;