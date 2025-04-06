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
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Page404 from "./Components/Pages/Page404";
import Hookuseparams from "./Components/Hooks/Hookuseparams";
import Searchparam from "./Components/Search_param_react_router_dom/Searchparam";
import Company from "./Components/Pages/Company";
import Channel from "./Components/Pages/Channel";
import Login from "./Components/Pages/Login";
import Proteced from "./Components/Protected/Protected";
import Chatbot from "react-chatbot-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import config from "./Components/Chatbot/Config";
import MessageParser from "./Components/Chatbot/MessageParser";
import ActionProvider from "./Components/Chatbot/ActionProvider";
import Getapi from "./Components/API/Getapi";
import Postapi from "./Components/API/Postapi";
import Deleteapi from "./Components/API/Deleteapi";
import Prviousfunction from "./Components/Prviousfunction/Prviousfunction";
import Statewithobject from "./Components/Statewithobject/Statewithobject";
import noteState from "./Context/notes/noteState";
import NoteState from "./Context/notes/noteState";
import Functionalcomponentprops from "./Components/Practice Question/Functionalcomponentprops";
import Statemanagament from "./Components/Practice Question/Statemanagement";
import Listrendringsuingmapfunction from "./Components/Practice Question/Listrendringsuingmapfunction";
<<<<<<< HEAD
import ConatctApi from "./Components/API_Revision/ContactApiPost";
=======
import HookUseEffect from "./Components/HooksRevisioninoneshot/HookUseEffect";
import HookUsestate from "./Components/HooksRevisioninoneshot/HookUsestate";
import HookUseRef from "./Components/HooksRevisioninoneshot/HookUseRef";
import HookUseReducer from "./Components/HooksRevisioninoneshot/HookUseReducer";
import UseLayoutEffectExample from "./Components/HooksRevisioninoneshot/HookeUseLayoutEffect";
import HookUseMemo from "./Components/HooksRevisioninoneshot/HookUseMemo";
>>>>>>> 5ec40e85406516d385190530318210c47ac1ae56

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
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  const appStyle = {
    backgroundColor: darkMode ? "#2c2c2c" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
    transition: "background-color 0.3s, color 0.3s",
  };

  let data = "Shubham Vishwakarma";

  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const tasks = ["Learn React", "Build Projects", "Practice Coding"];

  const toggleChatbot = () => {
    setIsChatbotVisible((prev) => !prev);
  };

  return (
    // <div className="App" style={appStyle}>
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
      {/* <NoteState>
        <BrowserRouter>
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
          <button className="btn chatbot-toggle-button" onClick={toggleChatbot}>
            {isChatbotVisible ? (
              <i className="bi bi-dash-circle text-white"></i>
            ) : (
              <i className="bi bi-chat text-white"></i>
            )}
          </button>

          {isChatbotVisible && (
            <div className="chatbot-container">
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
          )}

          <Routes>
            <Route path="/" element={<Proteced Component={Home} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />}>
              <Route path="company" element={<Company />} />
              <Route path="channel" element={<Channel />} />
            </Route>
            <Route path="/*" element={<Navigate to="/" />} />
            <Route path="/hookuseparam/:name" element={<Hookuseparams />} />
            <Route path="/searchparam" element={<Searchparam />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </NoteState> */}
      {/*  */}

      {/* API */}
      {/* Used dynamic routing also */}
      {/* <Getapi/> */}
      {/* <Postapi/> */}
      {/* <Deleteapi/> */}

      {/* <Prviousfunction/> */}
      {/* <Statewithobject/> */}
<<<<<<< HEAD
    <ConatctApi/>
=======

      {/* React Redux in another folder*/}
      {/* <HookUseEffect /> */}
      {/* <HookUsestate /> */}
      {/* <HookUseRef/> */}
      {/* <HookUseReducer/> */}
      {/* <UseLayoutEffectExample/> */}
      <HookUseMemo/>
>>>>>>> 5ec40e85406516d385190530318210c47ac1ae56
    </div>
  );
}

export default App;
