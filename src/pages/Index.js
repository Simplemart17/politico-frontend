import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/index';
import Footer from '../components/Footer';
import cardContent from '../utils/indexCardContent';

const Index = () => (
  <>
    <Header />
    <div className='showcase'>
      <h2 className='showcase-title'>Welcome to <span className='col-green-black'>Politico</span></h2>
      <div className='showcase-text large-text page-size center nav-center'><p>Politico is a platform designed for both the politicans and citizens. Politico enables citizens give their mandate to politicians running for different government offices while building trust in the process through tranparency.</p>
      </div>
    </div>
    <div className='showcase-btn center'>
      <Link to='register'><img alt='register to vote button' src='https://res.cloudinary.com/drmrayjr0/image/upload/v1559128337/register-btn_ppzsde.png' /></Link>
    </div>
    <div className='row page-width bg-white'>
      <div className='row-content'>
        {cardContent.map(card => (
          <div key={card.id} className='row-items justify'>
            <img src={card.img} />
            <div className='item-header center'><h2>{card.header}</h2></div>
            <p>{card.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
);

export default Index;
