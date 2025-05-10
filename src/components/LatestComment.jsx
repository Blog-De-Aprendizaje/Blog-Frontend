import React from 'react';
import { useComment } from '../hooks/useComment';

export const Comment = ({ postId }) => {
  const { comment, error, loading } = useComment(postId);

  if (loading) return <p>Cargando comentario...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="comment-container">
      <h3 style={{ color: '#00bfff' }}>Comentario más reciente</h3>
      
      {comment ? (
        <div className="comment">
          <p><strong>{comment.name} dijo:</strong></p>
          <p>{comment.content}</p>
          <p><em>Publicado el {new Date(comment.createdAt).toLocaleDateString()}</em></p>
        </div>
      ) : (
        <p>No hay comentarios para esta publicación.</p>
      )}
    </div>
  );
};
