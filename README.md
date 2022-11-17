﻿# Charles. (Apple Product Recommendation Bot) COSC 310

## What does Charles do?
Charles is a ChatBot the recommends the user their ideal Apple product based on the information gathered in the converstation.

## Charles Code
Charles has been developed in HTML, CSS and JavaScript. Here is a brief description of the operations each file runs.<br/>

index.html - This formats the home page of Charles. <br/>
about.html - This formats the about page of Charles.<br/>
styles.css - This file is responsible of the looks aspect of Charles (ex. Color, font, font-size, etc...)<br/>
app.js - This JavaScript file is responsible for the processing of the user input and sending it to the response.js file. This file also pastes the bots responses.<br/>
response.js - This JavaScript file is responsible for analizing the text and finding the proper responses that are hardcoded in the file.<br/>
response.test.js - Added for Assignment 3. This JavaScript file is responsible for unit testing of the major functions used in the response.js file.<br/>

## List of features that can be extracted from our code
- Our conversation flow, questions, and recommendations can be used and implemented as an API for other users 
- Our Sentiment analysis can be extracted and implemented into others code to help users further analyze their text so they can respond appropriately.
- The Named Entity Recognition feature can also be extracted to help users analyze parts of a given text to extract key words to further help the efficiency of the program.
- Users can also use our POS tagging that can further assist them in analyzing their text.
- Charles can be used by users as a fully functional API, which can be implemented for product recommendation purposes. 

## API's Implemented 
- JQuery - JavaScript library used to manage the event handling aspect of Charles.
- WINK API (NLP (Natural Language Processing) toolkits).
## Toolkits 
- Named Entity Recognition 
  - Breaks apart a sentance and goes through to recognize named entities.
- Sentiment Analysis 
  - Analysis of words in a sentence to determine if the user input is positive or not.
- POS tagging 
  - Coverting sentences to lists of words to dictate if the word is a noun, verb, adjective, etc.
  
 ## Other Documentation 
 - [Project Report]
 - [WBS (Work Breakdown Structure)]
 - [Gantt Chart]
 - [DFD Level 0]
 - [DFD level 1]
 - [Testing Overview](Automated_Unit_Testing.md)
 - [Network Graph]
 
