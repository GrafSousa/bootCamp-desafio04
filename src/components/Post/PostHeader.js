import React from 'react';
import './css/PostHeader.css';

function PostHeader({ author, date }) {
  const { name, avatar } = author;
  return (
    <div className="post-header">
      <img className="avatar" src={avatar} />
      <div className="details">
        <span>{name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

export { PostHeader };

