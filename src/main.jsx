import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import User from './components/User/Users.jsx';
import User2 from './components/User2/User2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Users from './components/User/Users.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
   element: <Root />,
   children:[
    {index:true,element:<Home />},
    {path:'mobile',element:<Mobiles />},
    {path:'laptop',element:<Laptops />},
    {path:'user',
      loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
      element:<User/>},
      {
        path:'user2',
        element:<Suspense fallback={<span>loading ... </span>}>
          <User2 userPromise={userPromise} ></User2>
        </Suspense>
      },
    
     
     

   ]
  },
  {
    path: 'about',
    element:<h1>About e chole ascho mama</h1>
  },
  {
    path: 'app',
    Component: App,
  },
  {
    path: 'app2',
    element: <App></App>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
