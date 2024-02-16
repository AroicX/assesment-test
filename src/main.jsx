import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/index.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home';
import CourseSlug from './pages/courses';

if ('serviceWorker' in navigator && 'caches' in window) {
  navigator.serviceWorker.register('./service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage/>
    ),
  },
  {
    path: "courses/:id",
    element: <CourseSlug/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
