import React from 'react';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import { CSSTransition } from 'react-transition-group';

import About from '../components/About';
import config from '../site.config';
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
