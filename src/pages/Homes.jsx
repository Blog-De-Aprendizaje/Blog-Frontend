import React from 'react';
import { Navbar } from '../components/Navbar';
import { GetPost } from '../components/GetPost';
import '../styles/Home.css';

export const Homes = () => {
  return (
    <main className="home-container">
      <Navbar />
      <div className="content">
        <GetPost />
      </div>
    </main>
  );
}
