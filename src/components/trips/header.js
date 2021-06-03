import React from 'react';
import * as headerStyles from '../../styles/trips/header.module.css';

const Header = ({ title }) => {
  return (
    <header 
      className={`${headerStyles.title} ${headerStyles.container}`}
      ref={title}
    >
      Trips across the United States
    </header>
  );
}

export default Header;