// components/Background/Background.jsx
import React from 'react';
import { useBlobs } from '../BackgroundContext';
import './styles/Background.css';

const Background = ({ children }) => {
  const config = useBlobs();

  const animationStyle = {
    animation: config.animation
  };

  return (
    <div 
      className="background-container" 
      style={{ background: config.containerBg }}
    > 
      {config.blobs.map((blob, index) => (
        <div
          key={index}
          className={`blob ${blob.className}`}
          style={{
            height: blob.height,
            width: blob.width,
            background: blob.background,
            left: blob.left,
            right: blob.right,
            top: blob.top,
            bottom: blob.bottom,
            animationDelay: `${blob.delay}s`,
            animation: config.animation
          }}
        />
      ))}
      
      <div className="blur-layer"></div>
      {children && <div className="background-content">{children}</div>}
    </div>
  );
};

export default Background;