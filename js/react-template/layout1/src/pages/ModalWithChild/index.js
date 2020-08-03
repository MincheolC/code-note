import React, { useState } from 'react';
import MyModal from '../../components/MyModal';
import SeriesForm from '../../components/SeriesForm';

export default () => {
  const [kombuItems, setKombuItems] = useState(new Map());
  const save = (kombuItem) => {
    console.log(kombuItem, kombuItems)
    setKombuItems(kombuItems.set(kombuItem.series, kombuItem))
  };

  return (
    <MyModal>
      <SeriesForm save={save}/>
    </MyModal>
  )
}
