import { Avatar } from "./BlogCard";
import { Link, NavLink } from "react-router-dom";

function App_Bar({ hide }: { hide: boolean }) {
  return (
    <div className="w-full h-[70px] flex justify-between items-center px-10 py-2 border-b overflow-x-hidden relative">
      <Link to={"/blogs"}>
        <h1 className=" capitalize font-bold text-lg">medium</h1>
      </Link>
      <div>
        {hide ? (
          <NavLink to={"/create_blog"}>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-6"
            >
              Create blog
            </button>
          </NavLink>
        ) : (
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-6"
          >
            new
          </button>
        )}

        <Avatar author="harshith" />
      </div>
    </div>
  );
}

export default App_Bar;
