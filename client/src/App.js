import React from "react";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Cards />} />
      </Routes>
    </BrowserRouter>
   
  );
}







// import './App.css';
// import Home from './components/Home';
// import SignUp from './components/Signup';
// import SignIn from './components/signin';
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import "react-toastify/dist/ReactToastify.css"

// function App() {
//   return (
    
//     <BrowserRouter>
//        <Routes>
//         <Route exact path='/register' element={<SignUp/>}></Route>
//         <Route path='/login' element={<SignIn/>}></Route>
//         <Route path='/' element={<Home/>}></Route>
//        </Routes>
//     </BrowserRouter>
   
    
//   );
// }

// export default App;
