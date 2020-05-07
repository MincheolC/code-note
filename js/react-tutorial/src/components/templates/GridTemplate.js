import React from 'react';
import styles from './grid/style.css'

const GridTemplate = () => (
  <div className={styles.container}>
    <div className={styles.div1}>
      My div1!!
    </div>

    <div className='div2'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget sodales ex. Praesent mollis orci eget iaculis ultrices. Praesent massa nisi, blandit quis risus sed, egestas dictum ligula. Curabitur imperdiet nec ante sed volutpat. Quisque massa urna, consequat in urna non, porta efficitur massa.
    </div>

    <div className='div3'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget sodales ex. Praesent mollis orci eget iaculis ultrices. Praesent massa nisi, blandit quis risus sed, egestas dictum ligula. Curabitur imperdiet nec ante sed volutpat. Quisque massa urna, consequat in urna non, porta efficitur massa.
    </div>

    <div className={styles.div4}>
      <img src='http://vectorlogofree.com/wp-content/uploads/2014/02/23300-sitepoint-logo-icon-vector-icon-vector-eps.png' />
    </div>
  </div>
)

export default GridTemplate;