import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Searchparam() {
  const [searchparam, setSearchparam] = useSearchParams();
  const showActiveuser = searchparam.get("filter") === "active";

  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 2</h2>
      <div>
        <button className="mr-3" onClick={() => setSearchparam({ filter: "active" })}>
          Active User
        </button>
        <button onClick={() => setSearchparam({})}>Restart Filter</button>
      </div>
      {showActiveuser ? (
        <h2>Showing active Users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  );
}
