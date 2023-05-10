import React from 'react';

const Backdrop = ({ showBackdrop, closeMenu }) => {
  return showBackdrop ? <div className="backdrop" onClick={closeMenu} /> : null;
};

export default Backdrop;
