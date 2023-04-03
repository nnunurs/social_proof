import React from 'react';
import './App.css';
import Stars from './components/Stars';
import Card from "./components/Card";
import anne from "./img/image-anne.jpg"
import colton from "./img/image-colton.jpg"
import irene from "./img/image-irene.jpg"


function App() {
  return (
    <div className="App">
      <div className="top-row">
        <div className="left">
          <span id="main">10,000+ of our users love our products.</span>
          <span id="body">We only provide great products combined with excellent customer service. See what out satisfied customers are saying about our services.</span>
        </div>
        <div className="stars">
          <Stars name={"Reviews"} stars={5} m={100}></Stars>
          <Stars name={"Report Guru"} stars={5} m={50}></Stars>
          <Stars name={"BestTech"} stars={5} m={0}></Stars>
        </div>
      </div>
      <div className="bottom-row">
        <Card name={"Colton Smith"} image={colton} m={0}>" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "</Card>
        <Card name={"Irene Roberts"} image={irene} m={20}>" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "</Card>
        <Card name={"Anne Wallace"} image={anne} m={40}>" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "</Card>
      </div>
    </div>
  );
}

export default App;
