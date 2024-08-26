import React from 'react';
import './Title.css';

const Title = (props) => {
  return (
    <div className="title-holder">
      <div className="text">{props.title}</div>
      <div className="animate-border"></div>
    </div>
  );
}

export default Title;
