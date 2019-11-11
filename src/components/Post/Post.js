import React from 'react';

import "./css/Post.css";

import { PostHeader } from './PostHeader';
import { PostComment } from './PostComment';

function Post({ post }) {
  return (
    <div className="post">
      <PostHeader {...post} />
      <p className="post-content">{post.content}</p>
      {post.comments.map(comment => (
        <PostComment key={comment.id} {...comment} />
      ))}
    </div>
  );
}

export { Post };
