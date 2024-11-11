import React from 'react';
import './ZombiAirdrop.css';
import { RiArrowRightDoubleFill } from 'react-icons/ri';

const ZombiAirdrop = () => {
  return (
    <>
      
    <section className="ZombiAirdrop-section">
        <div className="ZombiAirdrop-container">
            <div className="ZombiAirdrop-title-box">
                <h1>ANNIHILATIVE AIRDROP CAMPAIGN</h1>
                <span>play the game <RiArrowRightDoubleFill className='ZombiAirdrop-title-icon' />
                complete tasks <RiArrowRightDoubleFill className='ZombiAirdrop-title-icon' /> take your prize</span>
            </div>
            <div className="ZombiAirdrop-img-container"></div>
            <button>JOIN OUR AIRDROP</button>
        </div>
    </section>  

    </>
  )
}

export default ZombiAirdrop;