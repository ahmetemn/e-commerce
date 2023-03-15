


import {BrowserRouter , Routes , Route} from "react-router-dom"

import Home from "./pages/Home"
import './App.css';
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (

            
      <>



   <BrowserRouter>
         <Routes>
                  <Route path="/" element={<DashboardLayout />} > 
                  <Route index  element={<Home />}/>
                 </Route>
             </Routes>

       </BrowserRouter>
       </>

  );
}

export default App;
