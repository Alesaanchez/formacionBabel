import React from 'react';

function ScrollButton({onClick}) {
  return (
    <button className="scroll-button" onClick={onClick}>
      Subir arriba
    </button>
  );
}

export default ScrollButton
