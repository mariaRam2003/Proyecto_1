import React from 'react';

const Section = ({ backgroundImage, title, description, btn1Text, btn1Link, btn2Text, btn2Link }) => {
  return (
    <section style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="buttons">
          <a href={btn1Link}>{btn1Text}</a>
          <a href={btn2Link}>{btn2Text}</a>
        </div>
      </div>
    </section>
  );
};

export default Section;