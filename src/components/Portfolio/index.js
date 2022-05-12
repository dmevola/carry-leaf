import React from 'react';
import FruitFacts from '../../img/fruit-facts.png'
import Record from '../../img/4-the-record.png'
import RonniesMeats from '../../img/ronnies-meats.jpg'
import Chivalry from '../../img/chivalry-barber.jpg'
import RunBuddy from '../../img/run-buddy-bright.jpg'
import Ecomics from '../../img/ecomics.png'


function Portfolio () {
    return(
        <section>
            <h1 className='top-text text-center'>
                Portfolio of Work
            </h1>
        <div className='row justify-content-center portfolio'>
            <div className='col-12 col-md-4 col-lg-3 card m-1'>
                <img className='card-img-top' src={Ecomics} alt='E-Comics'></img>
                <div className='card-body'>
                    <h5 className='card-title'>E-Comics</h5>
                    <p className='card-text'>E-Comics is a C2C ecommerce store for comic books, manga, and more!</p>
                    <a href='https://e-comic-403a6.firebaseapp.com' className='btn btn-primary'>Check it out</a>
                </div>
            </div>
            <div className='col-12 col-md-4 col-lg-3 card m-1'>
                <img className='card-img-top' src={FruitFacts} alt='Fruit Facts'></img>
                <div className='card-body'>
                    <h5 className='card-title'>Fruit Facts</h5>
                    <p className='card-text'>Fruit facts is a reference tool for nutritional information, genus, family, and pronunciation of all of your favorite produce.</p>
                    <a href='https://dmevola.github.io/fruitfacts/' className='btn btn-primary'>Check it out</a>
                </div>
            </div>
            <div className='col-12 col-md-4 col-lg-3 card m-1'>
                <img className='card-img-top' src={Record} alt='4 The Record'></img>
                <div className='card-body'>
                    <h5 className='card-title'>4 The Record</h5>
                    <p className='card-text'>4 The Record is a tool to organize and catalog your record coection, share with friends, and find new music. </p>
                    <a href='https://record-1400.herokuapp.com/' className='btn btn-primary'>Check it out</a>
                </div>
            </div>
            <div className='col-12 col-md-4 col-lg-3 card m-1'>
                <img className='card-img-top' src={RonniesMeats} alt='Ronnies Meats'></img>
                <div className='card-body'>
                    <h5 className='card-title'>Ronnie's Meats</h5>
                    <p className='card-text'>Ronnie's Meats is a butcher shop in historic Eastern Market, Detroit. The city's finest beef, pork, lamb, and more!</p>
                    <a href='https://ronniesmeats.com/' className='btn btn-primary'>Check it out</a>
                </div>
            </div>
            <div className='col-12 col-md-4 col-lg-3 card m-1'>
                <img className='card-img-top' src={Chivalry} alt='Chivalry Barber'></img>
                <div className='card-body'>
                    <h5 className='card-title'>Chivalry Barber</h5>
                    <p className='card-text'>Chivalry Barber is a modern grooming company offering cuts, line ups, fades, beard trims, col col-md-4 col-lg-3oring, and more to make any knight shine.</p>
                    <a href='https://chivalrybarber.com' className='btn btn-primary'>Check it out</a>
                </div>
            </div>
            <div className='col-12 col-md-4 col-lg-3 card m-1'>
                <img className='card-img-top' src={RunBuddy} alt='Run Buddy'></img>
                <div className='card-body'>
                    <h5 className='card-title'>Run Buddy</h5>
                    <p className='card-text'>Run Buddy is more than an exercise trainer, its a lifestyle company to help you be the best version of yourself. Run farther, lose weight, feel great!</p>
                    <a href='https://dmevola.github.io/run-buddy/' className='btn btn-primary'>Check it out</a>
                </div>
            </div>
            <div className='col-12 col-md-4 col-lg-3 card m-1'>
                <img className='card-img-top' src={FruitFacts} alt='Fruit Facts'></img>
                <div className='card-body'>
                    <h5 className='card-title'>Fruit Facts</h5>
                    <p className='card-text'>Fruit facts is a reference tool for nutritional information, genus, family, and pronunciation of all of your favorite produce.</p>
                    <a href='https://dmevola.github.io/fruitfacts/' className='btn btn-primary'>Check it out</a>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Portfolio;