import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function UseLayoutEffectExample() {
  const [boxWidth, setBoxWidth] = useState(0);
  const boxRef = useRef();

  useEffect(() => {
    console.log("useEffect running...");
    setBoxWidth(boxRef.current.offsetWidth);
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect running...");
    setBoxWidth(boxRef.current.offsetWidth);
  });

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "lightblue",
        }}
      >
        Resize me!
      </div>
      <p>Box width: {boxWidth}px</p>
    </div>
  );
}
