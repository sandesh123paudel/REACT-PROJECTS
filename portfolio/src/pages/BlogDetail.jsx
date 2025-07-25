import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <div className="text-center py-24">Blog not found</div>;

  const BlogComponent = blog.Component;

  return (
    <div className="mt-20 md:mt-0 max-w-4xl mx-auto py-12 px-12">
      <div className="mb-8">
        <span className="text-sm text-gray-5000">{blog.date}</span>
        <h1 className="text-md font-bold mt-2">By Sundeep Acharya</h1>
        <h1 className="text-3xl font-bold mt-2 mb-4">{blog.title}</h1>
        <img
          src={blog.cover}
          alt={blog.title}
          className="w-full h-96 object-cover  mb-6"
        />
      </div>

      <BlogComponent />
    </div>
  );
};

export default BlogDetail;
