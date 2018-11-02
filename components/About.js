import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './Header';
import config from '../site.config';
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
              Router.push(this.props.storeFunc.target)
            }}
          >
          <section className="main">
            <div className="mbg">
              <h1 className="myname">Ikeda Takumi</h1>
              <p>Frontend Engineer / UI/UX Designer / Photographer</p>
              <p className="profile">
                I live and create in Japan since 22 age and mainly coded frontend scripts.
              </p>
              <ul>
                {config.skills.map((skill, index) =>
                  <li key={skill.type}>
                    {skill.type}: {skill.level}
                  </li>
                )}
              </ul>
            </div>
          </section>
          </CSSTransition>
      </div>
    );
  }
}
