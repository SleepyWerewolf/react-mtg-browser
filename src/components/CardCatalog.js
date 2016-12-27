import React from 'react';

const CardCatalog = ({ cardSetTypes, isFetchingData }) => (
  <div className='CardCatalog'>
    {cardSetTypes.map(set => <div key={set.code}>{set.code} - {set.name}</div>)}
    {isFetchingData && <div>Loading</div>}
  </div>
);

export default CardCatalog;
