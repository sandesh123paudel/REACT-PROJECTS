import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";

const Home = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold">Latest Blogs</h2>
    {blogs.map((blog) => (
      <BlogCard key={blog.id} blog={blog} />
    ))}
  </div>
);
export default Home;
