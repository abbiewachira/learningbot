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
                {
                    question:"If two’s company and three’s a crowd, what do four and five make?",
                    answer:"Nine.",
                    id:5,
                },
               
            ],
        },
    },
    {
        widgetName:"GeographyQuiz",
        widgetFunc:(props) => <Quiz{...props}/>,
        props:{
            questions:[
                {
                    question:" What is Africas newest country",
                    answer:"The Republic of South Sudan",
                    id:1,
                },
                {
                    question:"Which sound is unique to many African languages including Xhosa?",
                    answer:"A click, made in the throat",
                    id:2,
                },
                {
                    question:"The Kalahari Desert lies chiefly in which country?",
                    answer:"Botswana",
                    id:3,
                },
                {
                    question:"Which country used to be called South West Africa?",
                    answer:"Namibia",
                    id:4,
                },
                {
                    question:"Which African country is the tiger native to?",
                    answer:"None",
                    id:5,
                },
                {
                    question:"Which area of Russia has had the lowest temperatures in the world recorded there?",
                    answer:"Siberia",
                    id:6,
                },
                {
                    question:"Which country has had a prime minister called Wim Kok?",
                    answer:"The Netherlands",
                    id:7,
                },
                {
                    question:"Which Ocean is to the west of Portugal?",
                    answer:"Atlantic",
                    id:8,
                },
                {
                    widgetName:"CovidQuiz",
                    widgetFunc:(props) => <Quiz{...props}/>,
                    props:{
                        questions:[
                            {
                                question:"When was COVID-19 first reported?",
                                answer:"It was first reported from Wuhan, China, on 31 December 2019.",
                                id:1,
                            },
                            {
                                question:"How does it spread?",
                                answer:"The virus is transmitted through direct contact with respiratory droplets of an infected person (generated through coughing and sneezing)",
                                id:2,
                            },
                            {
                                question:"What are the common symptoms?",
                                answer:"Most common symptoms: fever, dry cough, tiredness",
                                id:3,
                            },
                            {
                                question:"How can we prevent the spread ?",
                                answer:"Wearing a mask,Cleaning your hands, Keeping a safe distance",
                                id:4,
                            },
                            {
                                question:"What should you do when you develop flu-like symptoms?",
                                answer:"Self isolate for 14 days and if symptoms persist call your nearest medical provision center to book your appointment.",
                                id:5,
                            },
                           
                        ],
                    },
                },

            ]

        }
    }


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