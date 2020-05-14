import React, { PureComponent } from 'react';
// import animate from 'animate.css';
import Equipment from './components/Equipment';
import Map from './components/Map';
import Loan from './components/Loan';
import Customer from './components/Customer';
import Product from './components/Product';
import Trading from './components/Trading';

import styles from './Chart.less';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <div className={styles.chartBox}>
          <div className={styles.topLeft}>
            <Equipment />
          </div>
          <div className={`${styles.topCenter}`}>
          {/* <div className={`${styles.topCenter} ${animate.animated} ${animate.zoomIn}`}> */}
            <Map />
          </div>
          <div className={styles.topRight}>
            <Loan />
          </div>
          <div className={styles.bottomLeft}>
            <Customer />
          </div>
          <div className={styles.bottomCenter}>
            <Product />
          </div>
          <div className={styles.bottomRight}>
            <Trading />
          </div>
        </div>
      </div>
    );
  }
}
