/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import "./App.css";
import User from "./Components/Userfun/User";
import Userclas from "./Components/Userclas/UserClass";
import Click from "./Components/Event/Click";
import Hookusestate from "./Components/Hooks/Hookusestate";
import Clicksecond from "./Components/Hooks/Clicksecond";
import Propsfun from "./Components/Propsfun&class/Propfun";
import Propsclass from "./Components/Propsfun&class/Propsclass";
import Inputfields from "./Components/Fields/Inputfields";
import Checkbox from "./Components/Fields/Checkfield";
import Hideshow from "./Components/Hideandshow/Hideshow";
import Formhandle from "./Components/Formhandle/Formhandle";
import Conditionalrenderingifelse from "./Components/Conditionalrendering/Conditionalrenderingifelse";
import Formvalidation from "./Components/Formvalidation/Formvalidation";
import Propsasfunction from "./Components/Functionprops/Propsfunction";
import Constructorclass from "./Components/Constructorclassandfunction/Constructorclass";
import Constructorpropsupdate from "./Components/Constructorclassandfunction/COnstructorpropsupdate";
import Componentdidmount from "./Components/Lifecycle/Didmount";
import Didupdate from "./Components/Lifecycle/Didupdate";
import Shouldcomupdtae from "./Components/Lifecycle/Shouldcomupdtae";
import Willunmount from "./Components/Lifecycle/Willunmount";
import HookuseEffect from "./Components/Hooks/Hookeuseeffect";
import Hookuseeffectstatespecific from "./Components/Hooks/Hookuseeffectstatespecific";
import Mapfunction from "./Components/Mapfunctionexample/Mapfunction";
import Nestedmapandnestedarray from "./Components/Mapfunctionexample/Nestedmapandnestedarray";
import Reusecomponent from "./Components/Reusecomponent/Reusecomponent";
import Liftingstateupcode from "./Components/Liftingstateupcode/Liftingstateupcode";
import Users from "./Components/Liftingstateupcode/User";
import Hookusememoeffect from "./Components/Hooks/Hookusememoeffect";
import Ref from "./Components/React_Ref_component/Ref";
import HookuseRef from "./Components/Hooks/HookuseRef";
import Controlledcomponent from "./Components/Controlledcomponent/Controlledcomponent";
import Higherordercomponent from "./Components/Higherordercomponent/Higherordercomponent";
import Navbar from "./Components/Navbarroutes/Nvabar";
import { BrowserRouter, Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Page404 from "./Components/Pages/Page404";

function App() {
  // function in function
  function Apple() {
    return <div>Apple Component</div>;
  }

  // Called function via props
  function getdata() {
    alert("Data called From app");
  }

  const [name, setName] = useState("Shubham");

  let data = "Shubham Vishwakarma";

  return (
    <div className="App">
      {/* <User/> Function Components */}
      {/* <Userclas/> Function Component */}
      {/* <Apple/> we can call the function in {jsx} also */}
      {/* <Click/> there are n number of evennt can be used in JSX just go through out the React js offical website */}
      {/* <Hookusestate/> state with function component */}
      {/* <Clicksecond/> */}

      {/* The following names are been changes using states using onclick event* {Function in props}/}
      {/* <Propsfun name={name}/>
      <button onClick={()=>setName("Shivam")}>Click Me</button> */}
      {/*  */}

      {/*{Class in props}*/}
      {/* <Propsclass name="Shubham" /> */}
      {/*  */}

      {/* Input fields */}
      {/* <Inputfields /> */}
      {/* <Checkbox /> */}
      {/* <Hideshow/> */}
      {/* <Formhandle/> */}
      {/* <Conditionalrenderingifelse/> */}
      {/* <Formvalidation/> */}
      {/* <Propsasfunction data={getdata} /> */}
      {/* <Constructorclass/> */}

      {/* Constructor Props Update */}
      {/* <Constructorpropsupdate name={name}/>
      <button onClick={()=>setName("Shivam")}>Update Props</button> */}

      {/* LifeCycle */}
      {/* <Componentdidmount /> */}
      {/* <Didupdate/> */}
      {/* <Shouldcomupdtae/> */}
      {/* <Willunmount/> */}

      {/* Hooks */}
      {/* <HookuseEffect/> */}
      {/* <Hookuseeffectstatespecific/> */}
      {/* <Mapfunction/> */}
      {/* <Nestedmapandnestedarray/> */}
      {/* <Reusecomponent/> */}
      {/* <Users name={data}/> */}
      {/* <Hookusememoeffect/> */}
      {/* <Ref/> */}
      {/* <HookuseRef/> */}
      {/* <Controlledcomponent/> */}
      {/* <Higherordercomponent/> */}

      {/* Navbar with React Router DOM */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
      {/*  */}
    </div>
  );
}

export default App;
