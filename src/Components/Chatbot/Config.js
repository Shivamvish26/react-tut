import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "HelperBot",
  initialMessages: [createChatBotMessage("Hello! How can I help you today?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
