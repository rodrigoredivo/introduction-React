import React from 'react';

function NameItem({ names, onDelete  }){
  return (
    <li>
      {names}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

export default NameItem;