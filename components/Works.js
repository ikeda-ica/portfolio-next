import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';
import { CSSTransition } from 'react-transition-group';

import Header from './Header';
import {WorkContents} from './contents';
import '../styles.scss';

@inject('storeFunc')
@observer
export default class Main extends React.Component {
  render(){
    return(
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <CSSTransition
          in={this.props.storeFunc.isShow}
          classNames="fade"
          timeout={500}
          mountOnEnter
          unmountOnExit
          onExited={() => {
            Router.push(this.props.storeFunc.target);
          }}
        >
          <WorkContents />
        </CSSTransition>
      </div>
    );
  }
}
