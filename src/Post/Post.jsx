import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
  console.log(post)

  
  return (
    <div style={{border:'2px solid pink',margin:'5px',padding:'5px'}}>
      <h3>{post.title}</h3>
      <Link to={`/posts/${post.id}`}>
      <button>Show Detail</button>
      </Link>
    </div>
  );
};

export default Post;