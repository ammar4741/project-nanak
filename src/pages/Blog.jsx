import { Link } from "react-router-dom";
import posts from "../Data/posts";

const Blog = () => {
  return (
    <div className="bg-[#F0DBDB]">
      <div id="blog" className="container mx-auto text-black">
      <h2 className="text-2xl font-bold text-center underline underline-offset-8 py-5">
        News & Updates
      </h2>
      <div className="p-1 md:grid grid-cols-2 gap-5 lg:grid-cols-3 max-h-120 overflow-y-auto pr-2 scrollbar-thin">
        {posts.map((post) => (
          <div
            key={post.id}
            className="mb-4 bg-gray-100 rounded-xl shadow-lg shadow-gray-400 p-4 "
          >
            <h3>{post.title}</h3>
            <p>{post.desc}</p>

            <Link to={`/blog/${post.id}`} className="text-green-600 flex justify-end">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
    
    </div>
  );
};

export default Blog;
