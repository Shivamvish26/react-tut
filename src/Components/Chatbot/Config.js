import { createChatBotMessage } from "react-chatbot-kit";
import TabbedQnA from "./Tabbed";
import ContactForm from "./Contact";


const config = {
  botName: "HelperBot",
  initialMessages: [
    createChatBotMessage("Hello! How can I help you today?", {
      widget: "options",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <TabbedQnA {...props} />,
    },
    {
      widgetName: "tabbedQnA",
      widgetFunc: (props) => <TabbedQnA {...props} />,
      mapStateToProps: ["selectedTab"],
    },
    {
      widgetName: "contactForm",
      widgetFunc: (props) => <ContactForm {...props} />,
    }
  ],
  state: {
    selectedTab: "general",
  }
};

export default config;