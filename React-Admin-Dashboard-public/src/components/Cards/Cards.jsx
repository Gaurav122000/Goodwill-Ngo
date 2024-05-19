import React, { useEffect, useState } from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";

import Card from "../Card/Card";

const Cards = () => {

  const tokenValue = window.localStorage.getItem("token")
  
  const [cards , setCards] = useState(cardsData)
  

  useEffect(() => {
    fetch('http://localhost:3001/donate' , {
      method: "POST",
      headers: 
      { 
      "Content-Type": "application/json" ,
      } ,
      body: JSON.stringify({ token : tokenValue })
    })
      .then(response => response.json())
      .then(data => {
        setCards(previous=>{
          const newCards = previous.map((card,index)=>{
            if(index===0){
              return {
                ...card , value:data.length
              }
            }
            else{
              return card
            }
            })
          return newCards
        })
      });

  }, [tokenValue]);

  useEffect(() => {
    fetch('http://localhost:3001/volunteer' , {
      method: "POST",
      headers: 
      { 
      "Content-Type": "application/json" ,
      } ,
      body: JSON.stringify({ token : tokenValue })
    } )
      .then(response => response.json())
      .then(data => {
        setCards(previous=>{
          const newCards = previous.map((card,index)=>{
            if(index===2){
              return {
                ...card , value:data.length
              }
            }
            else{
              return card
            }
            })
          return newCards
        })
      });

  }, [tokenValue]);

  useEffect(()=>{
    fetch('http://localhost:3001/contact' , {
      method: "POST",
      headers: 
      { 
      "Content-Type": "application/json" ,
      } ,
      body: JSON.stringify({ token : tokenValue })
    })
    .then(response => response.json())
    .then(data => {
      setCards(previous=>{
        const newCards = previous.map((card,index)=>{
          if(index===1){
            return{
              ...card , value:data.length
            }
          }
          else{
            return card
          }
        })
        return newCards
      })
    });
  },[tokenValue]);




  return (
    <div className="Cards">
      {cards.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              link={card.link}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
