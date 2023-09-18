import React from "react";
import './App.css';
import Home from './components/Home';
// import About from "./components/About";
import Contact from "./components/Contact";
import Header2 from "./components/Header2";
import Error from "./components/Error";
import Insta from "./components/Insta";
import Mail from "./components/Mail";
import UserDetails from "./components/UserDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
  
} from "react-router-dom";
const LazyLoading=React.lazy(()=>import("./components/About"));

//import Student from './components/Student';
// import {Header,Footer}  from './Header';
//import Header  from './Header';
// import Header,{Footer}  from './Header';
 


function App() {
 // this is dependency
  //},[]) // this is dependency
//},[state,state2]) // this is dependency
 return( 
  
  <Router>
    <div>
    <Header2 />
      <Routes>
        {/* home pase */}

        <Route index element={<Home/>} />
        <Route path="/app" element={<Home/>} />

         <Route  path="/app/:userId" element={<UserDetails/>}/>
          {/* about pase */}
        <Route path="/about" element={ <React.Suspense fallback="Loading....."><LazyLoading/></React.Suspense> } />
          {/* contact pase */}
        <Route path="/contact" element={<Contact/>} >
          <Route index element={<Insta/>} />
          <Route path="insta" element={<Insta/>} />
          <Route path="mail" element={<Mail/>} />
        </Route>
        {/* error pase */}
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  </Router>

 )

}

export default App;










  // return (
  //   <div className="App">
  //     {/* <Header /> */}
  //     <Student />
  //     {/* <Student name="abhay"
  //     age={20}/> */}  
  //   </div>
  // );


