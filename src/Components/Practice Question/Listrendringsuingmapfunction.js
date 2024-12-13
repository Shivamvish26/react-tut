// List Rendering
// Create a TodoList component that takes an array of tasks as props and renders each task in an unordered list (<ul>).
// Each list item must have a unique key.

import React from "react";

export default function Listrenderingusingmapfunction({ tasks }) {
  return (
    <div>
      <h1>Map Function</h1>
      <div>
        <h2>Todo List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
