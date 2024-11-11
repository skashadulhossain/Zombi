import React from 'react';
import './ZombiHeader.css';
import logoimg from './Image/logo img.svg';

const ZombiHeader = () => {
  return (
    <>
      
    <header className="ZombiHeader-section">
        <marquee behavior="alternate" direction="right" >
            <div className="ZombiHeader-container">
                <div className="ZombiHeader-marquee-item">
                    <span>*</span> <span>49% to the bunker</span> <span>republic development</span>
                </div>
                <div className="ZombiHeader-marquee-item">
                    <span>*</span> <span>51% of funds</span> <span>locked to the liquidity pool</span>
                </div>
                <div className="ZombiHeader-marquee-item">
                    <span>*</span> <span>49% to the bunker</span> <span>republic development</span>
                </div>
                <div className="ZombiHeader-marquee-item">
                    <span>*</span> <span>51% of funds</span> <span>locked to the liquidity pool</span>
                </div>
                <div className="ZombiHeader-marquee-item">
                    <span>*</span> <span>49% to the bunker</span> <span>republic development</span>
                </div>
                <div className="ZombiHeader-marquee-item">
                    <span>*</span> <span>51% of funds</span> <span>locked to the liquidity pool</span>
                </div>
            </div>
        </marquee>
        <nav>
            <div className="ZombiHeader-nav-logo-box">
                <img src={logoimg} alt="Logo" />
            </div>
             <div className="ZombiHeader-nav-links">
                <a href="#">TOKENOMICS</a>
                <a href="#">X (TWITTER)</a>
                <a href="#">TELEGRAM</a>
                <a href="#">GITBOOK</a>
                <a href="#">DISCORD</a>
            </div>
            <div className="ZombiHeader-nav-btn-box">
                <button>PLAY</button>
            </div>
        </nav>
    </header> 

    </>
  )
}

export default ZombiHeader
