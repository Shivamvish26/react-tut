class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      this.actionProvider.handleHello();
    } else if (lowerCaseMessage.includes("help")) {
      this.actionProvider.handleHelp();
    } else if (lowerCaseMessage.includes("general")) {
      this.actionProvider.handleQnA("general");
    } else if (lowerCaseMessage.includes("technical") || lowerCaseMessage.includes("tech")) {
      this.actionProvider.handleQnA("technical");
    } else if (lowerCaseMessage.includes("billing") || lowerCaseMessage.includes("payment")) {
      this.actionProvider.handleQnA("billing");
    } else if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("support") || lowerCaseMessage.includes("talk to someone")) {
      this.actionProvider.handleContactUs();
    } else {
      // Default response for messages that don't match any patterns
      const response = this.actionProvider.createChatBotMessage(
        "I'm not sure I understand. Would you like to see some frequently asked questions or contact our support team?",
        {
          widget: "tabbedQnA",
        }
      );
      this.actionProvider.updateChatbotState(response);
    }
  }
}

export default MessageParser;
