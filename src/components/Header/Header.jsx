import React from 'react';
import { Link, NavLink } from 'react-router';


const Header = () => {
  return (
    <div>
      <h1>This is header</h1>
      <nav>
        {/* ctrl + d  */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobile">Mobile</NavLink>
        <NavLink to="/laptop">Laptop</NavLink>
        <NavLink to="/users">UserNew</NavLink>
        <NavLink to="/user2">User2</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
       

      
    </div>
  );
};

export default Header;