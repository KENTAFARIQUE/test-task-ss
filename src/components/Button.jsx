import { useState } from 'react'

function SimpleButton({ text, onClick }) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

export default SimpleButton;