import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";
import HeroSection from "../components/HeroSection";

const Home = () => (
  <>
    <HeroSection />
    {/* <h2 className="text-2xl font-bold">Latest Blogs</h2> */}

    {/* {blogs.map((blog) => (
      <BlogCard key={blog.id} blog={blog} />
    ))} */}
  </>
);
export default Home;
