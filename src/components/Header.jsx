import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-text">
          <h1>Aiden Everage</h1>
          <div className="header-subtitle">
            <span><i className="fas fa-user"></i> He/Him</span>
            <span><i className="fas fa-map-marker-alt"></i> Gainesville, Florida</span>
          </div>
          <div className="header-subtitle">
            <span><i className="fas fa-graduation-cap"></i> Sophomore</span>
            <span><i className="fas fa-laptop-code"></i> Computer Engineering Major</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
