// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase()

      if(lowercase.includes("hello")){
          this.actionProvider.greet();
      }

      if (lowercase.includes("general") || lowercase.includes("gen")) {
        this.actionProvider.handleJavascriptQuiz();
      }

      if (lowercase.includes("geography") || lowercase.includes("geo")) {
        this.actionProvider.handleGeographyQuiz();
      }

      if (lowercase.includes("covid") || lowercase.includes("virus")) {
        this.actionProvider.handleCovidQuiz();
      }
    }
  }
  
  export default MessageParser;