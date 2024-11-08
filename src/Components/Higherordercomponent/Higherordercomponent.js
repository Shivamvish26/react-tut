import React, { useState } from "react";

export default function Higherordercomponent(){

    const [count, setCount] = useState(0)

    return(
        <div>
            <h1>Higher Order Component</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count + 1)}>Update</button>
        </div>
    )
}

// import React, { useState, useEffect } from "react";

// const withCounter = (WrappedComponent) => {
//   return (props) => {
//     const [count, setCount] = useState(0);

//     const increment = () => setCount(count + 1);

//     return <WrappedComponent count={count} increment={increment} {...props} />;
//   };
// };

// const withLogging = (WrappedComponent) => {
//   return (props) => {
//     useEffect(() => {
//       console.log("Component rendered or updated!");
//     });

//     return <WrappedComponent {...props} />;
//   };
// };

// function DisplayCounter({ count, increment }) {
//   return (
//     <div>
//       <h1>Higher Order Component Example</h1>
//       <h2>Count: {count}</h2>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// const EnhancedComponent = withLogging(withCounter(DisplayCounter));

// export default function App() {
//   return (
//     <div>
//       <EnhancedComponent />
//     </div>
//   );
// }
