import React, { useState } from 'react';

const TabbedQnA = ({ actionProvider }) => {
  const [selectedTab, setSelectedTab] = useState("general");

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    actionProvider.handleQnA(tab);  // Load the questions for the selected tab
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => handleTabChange("general")}>General</button>
        <button onClick={() => handleTabChange("technical")}>Technical</button>
        <button onClick={() => handleTabChange("billing")}>Billing</button>
      </div>
      
      {/* Render the questions and answers based on selected tab */}
      <div className="qna-content">
        {selectedTab === "general" && (
          <div>
            <p>Question: What is your name?</p>
            <p>Answer: I am a chatbot created to assist you!</p>
            <p>Question: How can you help me?</p>
            <p>Answer: I can answer your questions and provide assistance.</p>
          </div>
        )}
        {selectedTab === "technical" && (
          <div>
            <p>Question: How do I reset my password?</p>
            <p>Answer: Click on 'Forgot Password' on the login page.</p>
            <p>Question: What is the API endpoint?</p>
            <p>Answer: The API endpoint is 'https://api.example.com'</p>
          </div>
        )}
        {selectedTab === "billing" && (
          <div>
            <p>Question: How can I update my payment method?</p>
            <p>Answer: Go to your account settings and update your payment method.</p>
            <p>Question: How do I cancel my subscription?</p>
            <p>Answer: Contact our support team or visit your account settings.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedQnA;
