import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out This Epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                           src="images/img-9.jpg" 
                           text="Explore the hiden waterfall deep inside the Amazon jungle."
                           label='Adventure'
                           path="/services"
                        ></CardItem>

                        <CardItem
                           src="images/img-2.jpg" 
                           text="Travel through the Islands of Bali in a private Cruise."
                           label='Travel'
                           path="/services"
                        ></CardItem>

                        
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                           src="images/img-9.jpg" 
                           text="Explore the hiden waterfall deep inside the Amazon jungle."
                           label='Adventure'
                           path="/services"
                        ></CardItem>

                        <CardItem
                           src="images/img-2.jpg" 
                           text="Travel through the Islands of Bali in a private Cruise."
                           label='Travel'
                           path="/services"
                        ></CardItem>

                        
                    </ul>

                    
                </div>
            </div>
        </div>


    )
}


export default Cards;