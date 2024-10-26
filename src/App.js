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
      <Constructorpropsupdate name={name}/>
      <button onClick={()=>setName("Shivam")}>Update Props</button>
    </div>
  );
}

export default App;
