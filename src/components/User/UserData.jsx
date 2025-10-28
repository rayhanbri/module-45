import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation} from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

// 1.what is single page application

// A Single Page Application is a web app that loads only one HTML page (usually index.html) and dynamically updates the content using JavaScript — instead of reloading the whole page from the server every time you click a link.

// SPA = “Load once, then change views using JavaScript — without full page reloads.”

// 2. advantages of it 

// 1. Fast Navigation

// After the first load, navigating between pages is instant (no full reload).

// 2.Better User Experience

// Feels like a mobile app — smooth transitions and dynamic updates.

// 3.Less Server Load 

// Less Server Load

// 4.Reusable Components

// Frameworks like React use components that can be reused across pages.

// 5.Easier API Integration
// SPAs talk to the backend using APIs (usually REST or GraphQL).

// 6.offline Support (with Service Workers)
// Possible to cache the app locally and work offline (e.g., PWAs).


const UserData = ({user}) => {
  const [showinfo,setShowInfo] = useState(false);
  const [visitHome,setVisitHome]=useState(false);
  const {id,name,phone,email} =user;
  // const location = useLocation();
  // console.log(location.pathname)


  const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

  const userStyle ={
    border:'2px solid yellow',
    borderRadius: "10px",
    margin:"10px",
    padding:'10px'
  }
  if(visitHome){
    return <Navigate to="/"></Navigate>
  }
  
  
  return (
    <div style={userStyle}>
      <h2>Name: {name}</h2>
      <h2>Phone:{phone}</h2>
      <p><small>{email}</small></p>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={()=>setShowInfo(!showinfo)}>{showinfo ? 'Hide' : 'Show'} info</button>
      {
        showinfo && <Suspense fallback={<span>loading...</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      }
      <button onClick={()=>setVisitHome(true)}>Visit Home</button>
    </div>
  );
};

export default UserData;