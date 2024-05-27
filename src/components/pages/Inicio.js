import React from 'react';

import About from './Inicio/About';

function Inicio() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "teal";

  return (
    <>
      
      <About color={color} />
   
    
     
    </>
  );
}

export default Inicio;