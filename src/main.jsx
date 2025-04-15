import { StrictMode } from 'react'
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
import User from './components/User/User.jsx';

const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   children:[
    {index:true,Component:Home},
    {path:'mobile',Component:Mobiles},
    {path:'laptop',Component:Laptops},
    {path:'user',
      loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
      Component:User}

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
