import React from 'react';

function Aside({ showAside, closeMenu }) {
  return (
    <aside className={showAside ? 'active' : ''}>
      <button className="close" onClick={closeMenu}>&times;</button>
      <a href="">Existing Inventory</a>
      <a href="">Used Inventory</a>
      <a href="">Trade-In</a>
      <a href="">Demo Drive</a>
      <a href="">Insurance</a>
      <a href="">Fleet</a>
      <a href="">Cybertruck</a>
      <a href="">Roadster</a>
      <a href="">Semi</a>
      <a href="">Charging</a>
      <a href="">Commercial Energy</a>
      <a href="">Utilities</a>
      <a href="">Careers</a>
      <a href="">Find Us</a>
      <a href="">Support</a>
      <a href="">Investor Relations</a>
      <a href="">Shop</a>
      <a href="">Account</a>
      <a href="">More</a>
    </aside>
  );
}

export default Aside;
