import React, { useState } from 'react'; // import React, { useState, useEffect, useRef } from "react";
import './App.css';
import quotes from './quotes';
/*
// DEFINING TYPES TO USESTATES
const [value, setValue] = useState<string>("");
// const value: string
const [value, setValue] = useState<number>(0);    
// const value: number
const [value, setValue] = useState<boolean>(true); 
// const value: boolean
*/
function App() {
  let [color, setColor] = useState<string>('#2196F8')
  let [quote, setQuote] = useState<string>("The best time to plant a tree was 20 years ago. The second best time is now")
  let [author, setAuthor] = useState<string>("Chinese proverb")
  let [tweetQuoteStyle] = useState<string>("#1DA1F2");
  let [link, setLink] = useState<string>("https://twitter.com")
  const handleClick = () => {
    let randomQuoteIndex: number = Math.floor(Math.random() * quotes.length);
    setColor('#' + Math.floor(Math.random() * 16777215).toString(16));
    setQuote(quotes[randomQuoteIndex][0]);
    setAuthor(quotes[randomQuoteIndex][1]);
  }
  function tweet() {
    let str1: string = "https://twitter.com/intent/tweet?text=";
    setLink(str1.concat(quote + " (" + author + ")"))
  }
  return (
    <div className="App">
      <div id="bg" style={{ background: '#1DA1F2' }}>
        <div id="wrapper">
          <div id="quote-box">
            <div id='text' style={{ color: color }}><h1>{quote}</h1></div>
            <div id='author' style={{ color: color }}><p>-</p><p>{author}</p></div>
            <div id='buttons'>
              <button id='new-quote' onClick={handleClick} style={{ background: color }}>New Quote</button>
              <a className="twitter-share-button" onClick={() => tweet()}
                href={link} data-size="large" id='tweet-quote' style={{ background: tweetQuoteStyle }}>
                Tweet this quote!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
