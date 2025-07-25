import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => (
  <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-2xl h-[400px] flex flex-col">
    {/* Image Section (40% of card) */}
    <div className="h-[40%] overflow-hidden">
      <img
        src={blog.cover}
        alt={blog.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Content Section (60% of card) */}
    <div className="p-6 flex-grow flex flex-col">
      <div className="mb-2">
        <span className="inline-block px-3 py-1 text-xs font-semibold  border  rounded-full">
          {blog.category}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2 line-clamp-2">{blog.title}</h3>

      <p className="text-gray-500 text-sm mb-4">{blog.date}</p>

      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
        {blog.excerpt || "Read this interesting blog post..."}
      </p>

      <div className="mt-auto">
        <Link
          to={`/blog/${blog.id}`}
          className="inline-flex items-center gap-1 px-4 py-2 border rounded-full font-medium text-sm transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:text-white hover:scale-105 shadow-sm hover:shadow-md"
        >
          Read more
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

export default BlogCard;
