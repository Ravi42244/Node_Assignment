
import './App.css';
import Home from '../src/components/Home.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function app() {
  return (
   <>
   <ToastContainer
position="top-left"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
     <Home/>
    
   </>
  );
}

export default app;


