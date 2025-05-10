import { useState, useEffect } from 'react';
import axios from 'axios';

export const useComment = (postId) => {
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/blogAprendizaje/v1/comments/getLatestComment/${postId}`);

        if (response && response.data && response.data.comment) {
          setComment(response.data.comment);
        } else {
          setComment(null);
        }
      } catch (err) {
        setError('Aún no hay comentarios');
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchComment();
    } else {
      setLoading(false);
    }
  }, [postId]);

  return { comment, loading, error };
};
