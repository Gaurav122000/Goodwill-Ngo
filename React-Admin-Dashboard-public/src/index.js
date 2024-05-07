import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Upload from './components/Upload/Upload';
import 'bootstrap/dist/css/bootstrap.min.css';
import Donation from './components/Donation/Donation';
import Volunteer from './components/Volunteer/Volunteer'
import BlogForm from './components/Forms/BlogForm';
import GalleryForm from './components/Forms/GalleryForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Upload",
    element: <Upload />,   
  },
  {
    path:"/Table",
    element:<Donation />
  },
  {
    path:"/Volunteer",
    element:<Volunteer />
  },
  {
    path:"/blogform",
    element:<BlogForm />
  },
  {
    path:"/galleryform",
    element:<GalleryForm />
  },
 
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
