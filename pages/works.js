import React from 'react';
import { Provider } from 'mobx-react';

import Works from '../components/Works';
import storeFunc from '../stores';
import '../styles.scss';

export default class Index extends React.Component {
  render(){
    return(
      <Provider storeFunc={storeFunc}>
        <Works />
      </Provider>
    );
  }
}
