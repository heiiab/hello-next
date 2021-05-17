import React from 'react';
import { Spin } from 'antd';

import styles from './index.module.less';

const GlobalLoading: React.FC = (): JSX.Element => (
  <div className={styles['global-loading']}>
    <Spin size="large" />
  </div>
);

export default GlobalLoading;
