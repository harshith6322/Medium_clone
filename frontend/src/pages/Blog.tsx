/* eslint-disable @typescript-eslint/no-unused-vars */
import { useId } from "../hooks";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar } from "../components/BlogCard";
import App_Bar from "../components/App_Bar";

function Blog() {
  const { id } = useParams<{ id: string }>();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const { blog, loading } = useId({ id });
  const nav = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) return nav("/signin");

  if (loading)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        Laoding...
      </div>
    );
  return (
    <>
      <App_Bar hide={true} />

      <div className="w-screen h-screen  flex justify-start p-10 overflow-x-hidden">
        <div className="w-[60%] h-full overflow-hidden text-ellipsis">
          <h1 className="text-4xl font-extrabold break-words capitalize">
            {blog?.title}
          </h1>
          <p className=" mt-1 font-light text-base text-gray-500">
            {"postend on 24 feb 2024"}
          </p>
          <p className="break-words mt-5 text-xl font-normal">
            {blog?.content}
          </p>
        </div>
        <div className="  w-[40%] h-full p-8 ml-5">
          <h1 className=" font-medium text-lg text-center text-gray-600">
            Author
          </h1>
          <div className=" mt-5">
            <div className=" flex justify-center items-center flex-col">
              <Avatar author={blog?.author.name || ""} size={"100"} />
              <p className="  text-center mt-5 text-xl font-normal">
                {blog?.author.name}
              </p>
            </div>

            <div className=" flex gap-3 justify-center">
              <p className=" mt-3 capitalize bg-gray-400 w-[100px] h-[25px]  rounded-md text-center">
                {Math.ceil((blog?.content?.split(/\s+/).length || 0) / 250) +
                  " min read"}
              </p>
              <p className=" mt-3 capitalize bg-gray-400 w-[100px] h-[25px]  rounded-md text-center">
                {blog?.author.name}
              </p>
              <p className=" mt-3 capitalize bg-gray-400 w-[100px] h-[25px]  rounded-md text-center">
                {blog?.published ? "published" : "not published"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
