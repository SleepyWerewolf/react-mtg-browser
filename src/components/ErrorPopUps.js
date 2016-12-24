import React from 'react';

const ErrorPopUps = ({ errors, onErrorClick }) => (
  <div className='ErrorPopUps'>
    {
      errors.map(error => (
        <div key={error.id} className='ErrorPopUp' onClick={() => { onErrorClick(error.id) }}>
          {error.message}
        </div>
      ))
    }
  </div>
);

export default ErrorPopUps;
