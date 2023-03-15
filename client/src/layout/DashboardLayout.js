
  
import React from 'react'
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/navbar.js";

  const DashboardLayout = () => {
    return (

       <>
 
      <div>
      
        
        <Navbar />
        
          
           <div>
            <Outlet /> 
           </div>
      </div>
      </>
    )
  }
  
  export default DashboardLayout;