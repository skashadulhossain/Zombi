// ZombieFAQSection.jsx
import React, { useState } from 'react';
import './FAQSection.css';

const ZombieFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { question: "What chain is $ZMBI on?", answer: "Details will be announced soon" },
    { question: "What's the goal of launching $ZMBI?", answer: "Details will be announced soon" },
    { question: "Will $ZMBI still be available after the apocalypse?", answer: "Details will be announced soon" },
    { question: "Will there be an airdrop campaign?", answer: "Details will be announced soon" },
    { question: "When Vote Round?", answer: "Details will be announced soon" },
    { question: "When TGE?", answer: "Details will be announced soon" },
    { question: "Will $ZMBI be listed on exchanges?", answer: "Details will be announced soon" },
    { question: "What's the max supply of $ZMBI?", answer: "Details will be announced soon" },
    { question: "Official links to the project", answer: "Details will be announced soon" },
    { question: "What will be the price of $ZMBI?", answer: "Details will be announced soon" },
    { question: "Who's behind $ZMBI?", answer: "Details will be announced soon" },
    { question: "What happens after the token is launched?", answer: "Details will be announced soon" },
    { question: "Will you have merch?", answer: "Details will be announced soon" },
    { question: "Do you plan any metaverse integrations?", answer: "Details will be announced soon" },
    { question: "Do you have a roadmap?", answer: "Details will be announced soon" },
    { question: "When can I buy an island with $ZMBI?", answer: "Details will be announced soon" },
    { question: "Why am I still reading this dumb FAQ?", answer: "Details will be announced soon" }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="zombie-faq-section">
      <div className="zombie-faq-content">
        <h1 className="zombie-faq-title">
          <span>FREQUENTLY ASKED</span>
          <span>QUESTIONS</span>
        </h1>
        
        <div className="zombie-faq-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`zombie-faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="zombie-faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="zombie-faq-icon">+</span>
              </div>
              <div className="zombie-faq-answer">
                <div className="zombie-answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZombieFAQSection;