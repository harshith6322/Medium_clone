/* eslint-disable @typescript-eslint/no-unused-vars */
import BlogCard from "../components/BlogCard";
import App_Bar from "../components/App_Bar";
import { useBlog } from "../hooks";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const nav = useNavigate();
  const { blogs, loading } = useBlog();

  const token = localStorage.getItem("token");
  if (!token) return nav("/signin");

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen ">
        loading....
      </div>
    );
  return (
    <div className=" overflow-x-hidden">
      <App_Bar hide={true} />

      {blogs.map((b) => (
        <BlogCard
          author={b.author.name}
          time={"24 Feb 2024"}
          title={b.title}
          content={b.content}
          id={b.id}
        />
      ))}

      {/* <BlogCard
        author={"name"}
        time={"24 Feb 2024"}
        title={"Lorem ipsum dolor"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem, ad officiis inventore corrupti eveniet ratione pariatur debitis laborum optio ipsam animi ex doloremque omnis impedit veritatis, nobis assumenda. Architecto."
        }
      /> */}
    </div>
  );
}

export default Blogs;
