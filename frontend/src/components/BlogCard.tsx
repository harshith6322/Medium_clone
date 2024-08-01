import { Link } from "react-router-dom";

interface blogintput {
  id: string;
  author: string;
  time: string;
  title: string;
  content: string;
}

function BlogCard({ author, time, title, content, id }: blogintput) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="w-full h-[230px] text-black  px-20 py-5  font-mono max-lg:h-[50%] max-md:p-6 cursor-pointer">
        <div className=" flex w-[40%] items-center max-md:w-[100%]">
          <Avatar author={author} />
          <div className="ml-3 text-xl font-semibold">
            {author}
            <span className=" font-[400] text-[16px] px-1 py-2 ml-4">
              {time}
            </span>
          </div>
        </div>
        <div className=" font-bold text-2xl mt-3 max-md:text-lg max-md:font-semibold">
          {title}
        </div>
        <div className=" font-normal text-xl mt-1 text-gray-700 max-md:text-lg">
          {content.slice(0, 300) + "...."}
        </div>

        <div className="mt-6 w-[100px] rounded-lg  text-center text-gray-500 ">
          {`${Math.ceil(content.split(/\s+/).length / 250)} min read`}
        </div>

        <div className="w-full h-[0.8px] bg-gray-400 mt-3"></div>
      </div>
    </Link>
  );
}

// export function Avatar({
//   author,
//   size = "40",
// }: {
//   author: string;
//   size: string;
// }) {
//   return (
//     <div className="relative inline-flex items-center justify-center w-[40px] h-[40px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 max-lg:flex ">
//       <span className="font-medium text-gray-600 dark:text-gray-300">
//         {author.slice(0, 2).toUpperCase()}
//       </span>
//     </div>
//   );
// }
export function Avatar({
  author,
  size = "40",
}: {
  author: string;
  size?: string; // Make size optional
}) {
  return (
    <div
      className="relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
      style={{ width: `${size}px`, height: `${size}px` }} // Apply dynamic sizing
    >
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {author.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}

export default BlogCard;
