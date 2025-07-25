import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";


const CategoryPage = () => {
  const { category } = useParams();
  const filtered = blogs.filter((blog) => blog.category === category);

  return (
    <>
      {/* Hero-style Category Banner (half height) */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with dark overlay */}
        <div
          className={`absolute inset-0 bg-[url('/home-bg.jpg')] bg-cover bg-center brightness-50`}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Centered Text Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold capitalize mb-4">
            {category}
          </h1>
          <p className=" text-lg md:text-xl max-w-2xl mx-auto">
            Explore my latest {category} articles and stories
          </p>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-start mb-12 capitalize">
          Latest {category}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length > 0 ? (
            filtered.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No articles found in this category.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
