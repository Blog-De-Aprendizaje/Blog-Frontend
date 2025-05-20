import React, { useState, useEffect } from "react";
import { usePosts } from "../hooks/usePosts";
import { Comment } from './LatestComment';
import { CommentsList } from '../components/CommentList';
import '../styles/GetPost.css';
import filtroIcon from '../assets/filtro.png';

export const GetPost = () => {
  const { posts, error, loading } = usePosts();
  const [filterMenuVisible, setFilterMenuVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [availableCourses, setAvailableCourses] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const savedPostId = localStorage.getItem('selectedPostId');
    if (savedPostId) setSelectedPostId(savedPostId);

    const courses = [...new Set(posts.map(post => post.course))];
    setAvailableCourses(courses);
  }, [posts]);

  useEffect(() => {
    let filtered = posts;
    if (selectedCourse) {
      filtered = filtered.filter(post => post.course === selectedCourse);
    }
    if (selectedDate === 'newest') {
      filtered = [...filtered].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (selectedDate === 'oldest') {
      filtered = [...filtered].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    setFilteredPosts(filtered);
  }, [posts, selectedCourse, selectedDate]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'course') setSelectedCourse(value);
    else if (filterType === 'date') setSelectedDate(value);
  };

  const handleViewPost = (id) => {
    setSelectedPostId(id);
    localStorage.setItem('selectedPostId', id);
  };

  const handleGoBack = () => {
    setSelectedPostId(null);
    localStorage.removeItem('selectedPostId');
  };

  const getImageUrl = (imageName) => {
    if (!imageName) return null;
    return imageName.startsWith('http')
      ? imageName
      : `http://127.0.0.1:3000/uploads/post-pictures/${imageName}`;
  };

  const PostDetails = () => {
    const post = posts.find((post) => post._id === selectedPostId);
    if (!post) return <p>Post no encontrado</p>;

    const imageUrl = getImageUrl(post.postPicture);

    return (
      <div className="post-details">
        <button className="regresar" onClick={handleGoBack}>Regresar</button>
        <div className="post-content">
          <h2>{post.title}</h2>
          <p><strong>Curso:</strong> {post.course}</p>
          <p><strong>Descripción: </strong>{post.content}</p>
          <p><em>Publicado el {new Date(post.createdAt).toLocaleDateString()}</em></p>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={post.title}
              className="post-image"
              onError={() => console.log("Error al cargar imagen:", imageUrl)}
            />
          ) : (
            <p>No hay imagen disponible</p>
          )}
        </div>
        <CommentsList postId={selectedPostId} />
      </div>
    );
  };

  if (loading) return <p className="loading">Cargando publicaciones...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (selectedPostId) return <PostDetails />;

  return (
    <div className="post-list">
      <h1>Publicaciones</h1>
      <button className="filter-button" onClick={() => setFilterMenuVisible(!filterMenuVisible)}>
        <img src={filtroIcon} alt="Filtro" />
      </button>

      {filterMenuVisible && (
        <div className="filter-menu">
          <h2>Filtrar por:</h2>
          <div className="filter-option">
            <label htmlFor="course">Curso</label>
            <select
              id="course"
              value={selectedCourse}
              onChange={(e) => handleFilterChange('course', e.target.value)}
            >
              <option value="">Selecciona un curso</option>
              {availableCourses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </div>

          <div className="filter-option">
            <label htmlFor="date">Fecha</label>
            <select
              id="date"
              value={selectedDate}
              onChange={(e) => handleFilterChange('date', e.target.value)}
            >
              <option value="">Selecciona una fecha</option>
              <option value="newest">Más reciente</option>
              <option value="oldest">Más antiguo</option>
            </select>
          </div>

          <button onClick={() => { setSelectedCourse(''); setSelectedDate(''); }}>
            Quitar Filtro
          </button>
        </div>
      )}

      {filteredPosts.length === 0 ? (
        <p>No hay publicaciones para mostrar.</p>
      ) : (
        filteredPosts.map((post) => {
          const imageUrl = getImageUrl(post.postPicture);
          return (
            <div key={post._id} className="post">
              <div className="post-header">
                <h2>{post.title}</h2>
                <button
                  className="view-post-button"
                  onClick={() => handleViewPost(post._id)}
                >
                  Ver publicación
                </button>
              </div>
              <p><strong>Curso:</strong> {post.course}</p>
              <p>{post.content}</p>
              <p><em>Publicado el {new Date(post.createdAt).toLocaleDateString()}</em></p>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={post.title}
                  className="post-image-thumbnail"
                  onError={() => console.log("Error al cargar imagen:", imageUrl)}
                />
              )}
              <Comment postId={post._id} />
            </div>
          );
        })
      )}
    </div>
  );
};
