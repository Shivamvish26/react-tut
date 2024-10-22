import React, { useState } from "react";
import "./App.css";
import User from "./Components/Userfun/User";
import Userclas from "./Components/Userclas/UserClass";
import Click from "./Components/Event/Click";
import Hookusestate from "./Components/Hooks/Hookusestate";
import Clicksecond from "./Components/Hooks/Clicksecond";
import Propsfun from "./Components/Propsfun&class/Propfun";
import Propsclass from "./Components/Propsfun&class/Propsclass";

function App() {
  // function in function
  function Apple() {
    return <div>Apple Component</div>;
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

      {/*       The following names are been changes using states using onclick event* {Class in props}*/}
      <Propsclass name="Shubham" />
      {/*  */}
    </div>
  );
}

export default App;
