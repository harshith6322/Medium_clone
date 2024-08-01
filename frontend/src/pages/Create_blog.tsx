import { useEffect, useState } from "react";
import App_Bar from "../components/App_Bar";
import axios from "axios";
import { API } from "../tsconfig";
import { useNavigate } from "react-router-dom";

function Create_blog() {
  const [title, setTitle] = useState<string | null>(""); // Corrected syntax for title
  const [content, setContent] = useState<string | undefined>("");

  const nav = useNavigate();
  useEffect(() => {
    // Check if the token exists when the component mounts
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to sign-in page if not authenticated
      nav("/signin");
    }
  }, [nav]);

  function handle_create_Api() {
    const token = localStorage.getItem("token");
    if (!token) return nav("/signin");
    try {
      axios.post(
        `${API}/blog`,
        {
          title,
          content,
          published: true,
        },
        {
          headers: {
            authorization: token || null,
          },
        }
      );
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className=" w-screen h-screen">
      <App_Bar hide={false} />
      {/* {JSON.stringify(title, content)} */}
      <div className=" w-full h-[450px] flex justify-start items-center flex-col gap-5 p-10">
        {/* <input type="text" placeholder=" title" />
        <input type="text" placeholder="tell your story" /> */}
        <input
          type="text"
          id="large-input"
          className="block w-[60%] h-[100px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-3xl capitalize outline-none border-none  border-l-2"
          placeholder="Title...."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>

        <div className=" w-[60%] ">
          <textarea
            id="comment"
            rows={7}
            className="rounded-lg w-full text-gray-900 border-0 focus:ring-0 focus:outline-none text-xl capitalize outline-none border-none  border-l-2  p-4 bg-gray-50"
            placeholder="tell your story..."
            required
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-6 mt-3 w-full"
            onClick={handle_create_Api}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create_blog;
