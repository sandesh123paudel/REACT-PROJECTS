import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => (
  <div className="border p-4 my-2 rounded">
    <img
      src={blog.cover}
      alt={blog.title}
      className="w-full h-40 object-cover mb-2 rounded"
    />
    <h3 className="text-xl font-bold">{blog.title}</h3>
    <p className="text-sm text-gray-500">{blog.date}</p>
    <Link to={`/blog/${blog.id}`} className="text-blue-500 underline">
      Read more
    </Link>
  </div>
);

export default BlogCard;
