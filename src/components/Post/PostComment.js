import React from 'react';

import './css/PostComment.css';

function PostComment({ author: { name, avatar }, content }) {
  return (
    <div className="post-comments">
      <div className="divider" />
        <div className="comment">
          <img className="avatar" src={avatar}/>
          <p>
            <span>{name}</span>
            {content}
          </p>
        </div>
    </div>
  );
}

export { PostComment };
