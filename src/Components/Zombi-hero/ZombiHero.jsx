import React from 'react';
import './ZombiHero.css';
import zombimg from './Image/zombi.png';

const ZombiHero = () => {
  return (
    <>
      
    <section className="ZombiHero-section">
        <div className="ZombiHero-container">
            <div className="ZombiHero-title-box">
                <h1>Join the only fair democracy fairlaunch!</h1>
                <button>JOIN FAIRLAUNCH</button>
            </div>
            <div className="ZombiHero-img-container">
                <img src={zombimg} alt="" />
            </div>
        </div>
    </section>

    </>
  )
}

export default ZombiHero
