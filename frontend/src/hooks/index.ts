/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../tsconfig";
// import { useParams } from "react-router-dom";

type Blog = {
  author: { name: string };
  id: string;
  title: string;
  content: string;
  published: boolean;
};
type blo = {
  author: { name: string };
  title: string;
  content: string;
  published: string;
};

export function useId({ id }: { id: string }) {
  const [blog, setBlog] = useState<blo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async (blogId: string) => {
      try {
        const response = await axios.get(`${API}/blog/${blogId}`, {
          headers: {
            authorization: localStorage.getItem("token") || "",
          },
        });

        setBlog(response.data.blog); // Assuming the blog data is returned as `response.data.blog`

        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };

    fetchBlog(id);
  }, [id]);

  return { blog, loading };
}

export function useBlog() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  // const [ids, setIds] = useState<string[]>([]); // State to store IDs

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API}/blog`, {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        });

        const posts = response.data.posts;

        // if (Array.isArray(posts)) {
        setBlogs(posts);

        // Extract IDs from posts
        // const idsList = posts.map((blog) => blog.id);
        // setIds(idsList);
        // } else {
        console.error("Unexpected response format:", response.data);
        // }

        // console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading };
}
