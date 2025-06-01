import React,{Suspense} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login"
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Expense from './pages/Dashboard/Expense';
import Income from './pages/Dashboard/income';
import UserProvider from './context/UserContext';
import {Toaster} from "react-hot-toast"

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => {
  return (
<UserProvider>
 <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} /> 
          <Route path="/login" exact element={<Login />} /> 
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/expense" exact element={<Expense />} />
          <Route path="/income" exact element={<Income />} />
        </Routes>
      </Router>
    </div>

    <Toaster 
    toastOptions={{
      className:"",
      style:{
        fontSize:'13px'
      },
    }}
    />

     <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
    
</UserProvider>

)
}



export default App;

const Root=()=>{
  
const isAuthenticated=!!localStorage.getItem("token");
return isAuthenticated?(

<Navigate to="/dashboard" />
):(
<Navigate to="/login" />

);};