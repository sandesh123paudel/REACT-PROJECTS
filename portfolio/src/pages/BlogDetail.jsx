import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

const BlogDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../content/${id}.md`)
      .then((res) => fetch(res.default).then((r) => r.text()))
      .then(setContent)
      .catch(() => setContent("Blog not found."));
  }, [id]);

  return (
    <div className="p-4 prose lg:prose-xl max-w-3xl mx-auto">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogDetail;
