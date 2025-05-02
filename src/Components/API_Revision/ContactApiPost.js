import React from "react";
import { useState } from "react";

export default function ContactApi() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  async function handlesubmitfrom(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users_contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      const data = await response.json();
      console.log("Response from API:", data);

      // Clear the form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.log("Failed to submit the data", error);
    }
  }

  return (
    <div className="p-5">
      <div className="shadow">
        <div>
          <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
          <div className="p-4">
            <form onSubmit={handlesubmitfrom}>
              <div className="row mb-3">
                <div className="col-md-6 md:mb-0">
                  <input
                    className="w-100 p-2 rounded border"
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="w-100 p-2 rounded border"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  className="w-100 p-2 rounded border"
                  type="tel"
                  placeholder="Enter Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="w-100 p-2 rounded border"
                  placeholder="Enter Message (Optional)"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="p-2 px-4 bg-blue-500 text-black rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
