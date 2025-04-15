import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
  console.log(post)
 
  const navigate =useNavigate();

  const handleNavigate= ()=>{
     
    navigate (`/posts/${post.id}`);

  }
  
  return (
    <div style={{border:'2px solid pink',margin:'5px',padding:'5px'}}>
      <h3>{post.title}</h3>
      <Link to={`/posts/${post.id}`}>
      <button>Show Detail</button>
      </Link>
      <button onClick={handleNavigate}>Detailsof : {post.id}</button>
    </div>
  );
};

export default Post;