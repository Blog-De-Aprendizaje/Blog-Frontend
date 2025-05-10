import { useState, useEffect } from "react";
import axios from "axios";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/blogAprendizaje/v1/posts/getPosts");

        if (response.data && Array.isArray(response.data)) {
          setPosts(response.data);
        } else if (response.data && response.data.posts) {
          setPosts(response.data.posts);
        }
      } catch (err) {
        setError("Error al obtener las publicaciones.");
        console.error("Error al obtener publicaciones:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, error, loading };
};
