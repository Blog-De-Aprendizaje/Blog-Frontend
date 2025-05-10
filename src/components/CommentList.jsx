import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/blogAprendizaje/v1/comments/getComments/${postId}`);
        setComments(response.data.comments || []);
      } catch (err) {
        setError('No se pudieron cargar los comentarios');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  const handleInputChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleAddComment = async () => {
    if (newComment.name && newComment.content) {
      try {
        await axios.post(`http://127.0.0.1:3000/blogAprendizaje/v1/comments/addComment/${postId}`, newComment);

        setNewComment({ name: '', content: '' });

        setComments([{ ...newComment, _id: Date.now(), createdAt: new Date() }, ...comments]);

      } catch (err) {
        setError('Error al agregar el comentario');
      }
    }
  };

  return (
    <div>
      
      <div className="add-comment-form">
        <h4>Agregar un comentario</h4>
        <input 
          type="text" 
          name="name" 
          value={newComment.name} 
          onChange={handleInputChange} 
          placeholder="Tu nombre" 
        />
        <textarea 
          name="content" 
          value={newComment.content} 
          onChange={handleInputChange} 
          placeholder="Escribe tu comentario" 
        />
        <button onClick={handleAddComment}>Agregar comentario</button>
      </div>

      <h3>Comentarios</h3>

      {loading && <p>Cargando comentarios...</p>}
      {error && <p>{error}</p>}

      {comments.map((comment) => (
        <div key={comment._id} className="comment">
          <p><strong>{comment.name} dijo:</strong></p>
          <p>{comment.content}</p>
          <p><em>Publicado el {new Date(comment.createdAt).toLocaleDateString()}</em></p>
        </div>
      ))}
    </div>
  );
};
