import React from 'react';

const SectionLast = ({ backgroundImage, title, btnText }) => {
  return (
    <section style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="content">
        <h1>{title}</h1>
        <div className="section__action__btn buttons">
          <a href="" className="btn-last">{btnText}</a>
        </div>
        <footer className="footer">
          <ul>
            <li><a href="#">Tesla © 2021</a></li>
            <li><a href="#">Privacy &amp; Legal</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Engage</a></li>
            <li><a href="#">Locations</a></li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default SectionLast;
