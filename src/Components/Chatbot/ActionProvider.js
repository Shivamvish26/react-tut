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
  
    updateChatbotState(message) {
      this.setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  