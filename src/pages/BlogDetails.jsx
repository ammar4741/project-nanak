import { useParams } from "react-router-dom";
import posts from "../Data/posts";

const BlogDetails = () => {
  const { id } = useParams();

  const post = posts.find((p) => p.id === id);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <p className="mt-4">{post.content}</p>
      {/* add image  */}
      {/* {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-xl my-4"
        />
      )} */}
      {/*           */}
      <a href="/#blog" className="text-blue-500 mt-4 block">
        ← Back to Blog
      </a>
    </div>
  );
};

export default BlogDetails;
