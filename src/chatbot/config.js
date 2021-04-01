import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";


import Options from"../components/options/options";
import Quiz from "../components/quiz/quiz";
const config = {
    botName: "Learningbot",
  initialMessages: [createChatBotMessage(`Hello, What would you like to learn?`, {
      widget:"options",
  }),
],
widgets:[
    {
        widgetName:"options",
        widgetFunc:(props)=><Options{...props}/>,

    },
    {
        widgetName:"javascriptQuiz",
        widgetFunc:(props) => <Quiz{...props}/>,
        props:{
            questions:[
                {
                    question:"How many months have 28 days??",
                    answer:"All 12!",
                    id:1,
                },
                {
                    question:"Imagine you’re in a room that’s filling up with water quickly. There are no windows or doors. How do you get out?",
                    answer:"Stop imagining.",
                    id:2,
                },
                {
                    question:"I am an odd number. Take away one letter and I become even. What number am I?",
                    answer:"Seven (take away the ‘s’ and it becomes ‘even’).",
                    id:3,
                },
                {
                    question:"What can you make that no one—not even you—can see?",
                    answer:"Noise.",
                    id:4,
                },
            ],
        },
    },

],

  customStyles:{
    //override chatbot message styles
    botMessageBox:{
        backgroundColor:"#47C1E4",
    },
    //overrride chat button styles
    chatButton:{
        backgroundColor: "#47C1E4",
    },
},
};

export default config;