import { useParams } from "react-router-dom";
import posts from "../Data/posts";

const BlogDetails = () => {
  const { id } = useParams();

  const post = posts.find((p) => p.id === id);

  if (!post)
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Post not found
      </div>
    );

  return (
    <div className="bg-[#F5F1EA] min-h-screen pt-[120px] pb-20 px-4">

      {/* CONTAINER */}
      <div
        className="max-w-5xl mx-auto
        bg-white
        rounded-3xl
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        overflow-hidden"
      >

        {/* IMAGE */}
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full max-h-[500px] object-cover"
          />
        )}

        {/* VIDEO */}
        {post.video && (
          <div className="w-full">
            <video
              controls
              className="w-full max-h-[500px] object-cover"
            >
              <source src={post.video} type="video/mp4" />
            </video>
          </div>
        )}

        {/* CONTENT */}
        <div className="p-6 md:p-10">

          {/* CATEGORY */}
          <p
            className="uppercase tracking-[3px]
            text-[#c8a96b]
            text-sm font-semibold"
          >
            News & Updates
          </p>

          {/* TITLE */}
          <h1
            className="text-3xl md:text-5xl
            font-bold text-[#1a1a1a]
            leading-tight mt-4"
          >
            {post.title}
          </h1>

          {/* DATE */}
          <p className="text-gray-500 mt-4 text-sm md:text-base">
            {post.date}
          </p>

          {/* DIVIDER */}
          <div className="w-full h-[1px] bg-gray-200 my-8"></div>

          {/* CONTENT */}
          <div
            className="text-gray-700
            leading-8
            text-base md:text-lg
            whitespace-pre-line"
          >
            {post.content}
          </div>

          {/* EXTRA IMAGE */}
          {post.extraImage && (
            <img
              src={post.extraImage}
              alt={post.title}
              className="w-full rounded-2xl my-10 object-cover"
            />
          )}

          {/* EXTRA VIDEO */}
          {post.extraVideo && (
            <div className="my-10">
              <video
                controls
                className="w-full rounded-2xl"
              >
                <source
                  src={post.extraVideo}
                  type="video/mp4"
                />
              </video>
            </div>
          )}

          {/* BACK BUTTON */}
          <a
            href="/#blog"
            className="inline-flex items-center
            mt-10
            bg-[#c8a96b]
            hover:bg-[#b89253]
            text-white
            font-semibold
            px-7 py-3
            rounded-xl
            transition-all duration-300
            shadow-lg hover:scale-105"
          >
            ← Back to Blog
          </a>

        </div>
      </div>
    </div>
  );
};

export default BlogDetails;