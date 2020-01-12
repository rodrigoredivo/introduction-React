import React from 'react';
import PropTypes from 'prop-types';

function NameItem({ names, onDelete  }){
  return (
    <li>
      {names}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

// Default Props
NameItem.defaultProps = {
  names: 'Secret',
};

// PropTypes
NameItem.propTypes = {
  names: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default NameItem;