class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleHello = () => {
    const message = this.createChatBotMessage("Hello! How can I assist you?");
    this.updateChatbotState(message);
  };

  handleHelp = () => {
    const message = this.createChatBotMessage("Sure, I'm here to help. What do you need assistance with?");
    this.updateChatbotState(message);
  };

  // Add handler for the QnA tabs
  handleQnA = (tabName) => {
    let responseMessage;
    
    switch(tabName) {
      case "general":
        responseMessage = "Here are some general questions you might have. Feel free to ask me anything else!";
        break;
      case "technical":
        responseMessage = "These are common technical questions. Let me know if you have a specific technical issue.";
        break;
      case "billing":
        responseMessage = "Here are frequently asked billing questions. If you need more assistance with billing, please let me know.";
        break;
      default:
        responseMessage = "What would you like to know about?";
    }
    
    const message = this.createChatBotMessage(responseMessage, {
      widget: "tabbedQnA"
    });
    
    this.updateChatbotState(message);
  };

  // Handle when user clicks on a specific question
  handleQuestionClick = (question, answer) => {
    // First add the user's question to the chat
    const userMessage = { 
      message: question,
      type: 'user'
    };
    
    this.updateChatbotState(userMessage);
    
    // Then add the bot's answer
    const botMessage = this.createChatBotMessage(answer);
    this.updateChatbotState(botMessage);
  };

  // Handler for contact us request
  handleContactUs = () => {
    const message = this.createChatBotMessage(
      "Please fill out this form to contact our support team:", 
      {
        widget: "contactForm",
      }
    );
    
    this.updateChatbotState(message);
  };

  // Handler for form submission
  handleContactFormSubmit = (formData) => {
    // In a real application, you would send this data to your server
    // For now, we'll just acknowledge receipt
    const message = this.createChatBotMessage(
      `Thank you, ${formData.name}! Your message has been sent. We'll get back to you at ${formData.email} as soon as possible.`
    );
    
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;