// TokenStats.jsx
import React from 'react';
import './TokenStats.css';

const TokenStats = () => {
  const stats = [
    {
      number: '1',
      title: '100% OF TOKENS',
      description: 'LIQUIDITY POOL.'
    },
    {
      number: '2',
      title: '51% OF FUNDS',
      description: 'ARE AUTO-LISTED.'
    },
    {
      number: '3',
      title: 'ALL LIQUIDITY IS',
      description: 'BURNED AFTER LISTING.'
    }
  ];

  return (
    <div className="zombie-stats-section">
      <div className="zombie-stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="zombie-stat-item">
            <div className="zombie-stat-number">{stat.number}</div>
            <div className="zombie-stat-content">
              <h3>{stat.title}</h3>
              <p>{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenStats;