import React from 'react';
import { Provider } from 'mobx-react';

import About from '../components/About';
import storeFunc from '../stores';
import '../styles.scss';

export default class Index extends React.Component {
  render(){
    return(
      <Provider storeFunc={storeFunc}>
        <About />
      </Provider>
    );
  }
}
