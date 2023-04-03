import React, { useEffect, useState } from 'react';
import './App.css';
import Stars from './components/Stars';
import Card from "./components/Card";
import anne from "./img/image-anne.jpg"
import colton from "./img/image-colton.jpg"
import irene from "./img/image-irene.jpg"


function App() {
  const mediaMatch = window.matchMedia('(min-width: 600px)')
  const [matches, setMatches] = useState(mediaMatch.matches)

  useEffect(() => {
    const handler = (e: { matches: boolean }) => setMatches(e.matches)
    mediaMatch.addListener(handler)
    return () => mediaMatch.removeListener(handler)
  })

  return (
    <div className="App">
      <div className="top-row">
        <div className="left">
          <span id="main">10,000+ of our users love our products.</span>
          <span id="body">We only provide great products combined with excellent customer service. See what out satisfied customers are saying about our services.</span>
        </div>
        <div className="stars">
          <Stars id="first-star" name={"Reviews"} stars={5}></Stars>
          <Stars id="second-star" name={"Report Guru"} stars={5}></Stars>
          <Stars name={"BestTech"} stars={5}></Stars>
        </div>
      </div>
      <div className="bottom-row">
        <Card name={"Colton Smith"} image={colton}>" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "</Card>
        <Card id="second-card" name={"Irene Roberts"} image={irene}>" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "</Card>
        <Card id="third-card" name={"Anne Wallace"} image={anne}>" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "</Card>
      </div>
    </div>
  );
}

export default App;
