

import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import './App.css';
import DashboardLayout from "./layout/DashboardLayout";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
function App() {
  return (

    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />} >
            <Route index element={<Home />} />
  


          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />}/>
          </Route>

          </Route>
        </Routes>
      </HashRouter>
    </>

  );
}

export default App;
