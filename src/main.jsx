
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './RouterProvider/Router.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';




ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </div>
)
