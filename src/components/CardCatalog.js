import React from 'react';

const CardCatalog = ({ cardSetTitles, isFetchingData }) => (
  <div className='CardCatalog'>
    {cardSetTitles.map(set => <div key={set.code}>{set.code} - {set.name}</div>)}
    {isFetchingData && <div>Loading</div>}
  </div>
);

export default CardCatalog;
