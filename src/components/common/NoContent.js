import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const NoContent = props => {
  return (
    <p className="no-content-box">
      <FontAwesomeIcon icon={faExclamationCircle} />
      <span>{props.text}</span>
    </p>
  );
}

export default NoContent;