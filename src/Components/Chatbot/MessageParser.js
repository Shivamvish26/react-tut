class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.handleHello();
      } else if (lowerCaseMessage.includes("help")) {
        this.actionProvider.handleHelp();
      }
    }
  }
  
  export default MessageParser;
  