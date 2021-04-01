// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    greet = () => {
        const message = this.createChatBotMessage("Hello friend.");
        this.addMessageToState(message);
    };


    handleJavascriptQuiz = () => {
        const message = this.createChatBotMessage(
          "Fantastic. Here is your quiz. Good luck!",
          {
            widget: "javascriptQuiz",
          }
        );
    
        this.addMessageToState(message);
      };

      handleGeographyQuiz = () => {
        const message = this.createChatBotMessage(
          "Fantastic. Here is your quiz. Good luck!",
          {
            widget: "GeographyQuiz",
          }
        );
    
        this.addMessageToState(message);
      };


      handleCovidQuiz = () => {
        const message = this.createChatBotMessage(
          "Fantastic. Here is your quiz. Good luck!",
          {
            widget: "CovidQuiz",
          }
        );
    
        this.addMessageToState(message);
      };



    addMessageToState = (message)=> {
        this.setState((prevState)=> ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
  }
  
  export default ActionProvider;