import React, { useState } from 'react';

const TabbedQnA = ({ actionProvider }) => {
  const [selectedTab, setSelectedTab] = useState("general");

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    if (actionProvider) {
      actionProvider.handleQnA(tab);
    }
  };

  // Handle when a user clicks on a specific question
  const handleQuestionClick = (question, answer) => {
    if (actionProvider) {
      actionProvider.handleQuestionClick(question, answer);
    }
  };

  // QnA data organized by categories
  const qnaData = {
    general: [
      { question: "What is your name?", answer: "I am a chatbot created to assist you!" },
      { question: "How can you help me?", answer: "I can answer your questions and provide assistance." },
      { question: "How do I contact support?", answer: "You can use our contact form to reach our support team." }
    ],
    technical: [
      { question: "How do I reset my password?", answer: "Click on 'Forgot Password' on the login page." },
      { question: "What is the API endpoint?", answer: "The API endpoint is 'https://api.example.com'" }
    ],
    billing: [
      { question: "How can I update my payment method?", answer: "Go to your account settings and update your payment method." },
      { question: "How do I cancel my subscription?", answer: "Contact our support team or visit your account settings." }
    ]
  };

  // Handle contact us button click
  const handleContactClick = () => {
    if (actionProvider) {
      actionProvider.handleContactUs();
    }
  };

  return (
    <div className="tabbed-qna">
      <div className="tabs">
        <button 
          className={`tab ${selectedTab === "general" ? "active" : ""}`}
          onClick={() => handleTabChange("general")}
        >
          General
        </button>
        <button 
          className={`tab ${selectedTab === "technical" ? "active" : ""}`}
          onClick={() => handleTabChange("technical")}
        >
          Technical
        </button>
        <button 
          className={`tab ${selectedTab === "billing" ? "active" : ""}`}
          onClick={() => handleTabChange("billing")}
        >
          Billing
        </button>
      </div>
      
      <div className="qna-content">
        {qnaData[selectedTab].map((item, index) => (
          <div 
            key={index} 
            className="qna-item"
            onClick={() => handleQuestionClick(item.question, item.answer)}
          >
            <p className="question">{item.question}</p>
          </div>
        ))}
      </div>

      <button 
        className="contact-button" 
        onClick={handleContactClick}
      >
        Contact Support
      </button>

      <style jsx>{`
        .tabbed-qna {
          margin-top: 10px;
          max-width: 100%;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #ddd;
          margin-bottom: 10px;
        }
        
        .tab {
          padding: 8px 12px;
          background: none;
          border: none;
          cursor: pointer;
          border-bottom: 2px solid transparent;
        }
        
        .tab.active {
          border-bottom: 2px solid #376B7E;
          font-weight: bold;
        }
        
        .qna-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .qna-item {
          padding: 8px;
          border: 1px solid #eee;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .qna-item:hover {
          background-color: #f5f5f5;
        }
        
        .question {
          margin: 0;
          color: #376B7E;
        }

        .contact-button {
          margin-top: 12px;
          background-color: #376B7E;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
        }

        .contact-button:hover {
          background-color: #2a5060;
        }
      `}</style>
    </div>
  );
};

export default TabbedQnA;