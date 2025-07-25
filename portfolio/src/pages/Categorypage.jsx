import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";

const CategoryPage = () => {
  const { category } = useParams();
  const filtered = blogs.filter((blog) => blog.category === category);

  return (
    <div className="p-4">
      <h2 className="text-2xl capitalize font-bold">{category}</h2>
      {filtered.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
export default CategoryPage;
