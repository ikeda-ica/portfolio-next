import React from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

@inject('storeFunc')
@observer
export default class Header extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.storeFunc.isShow = true;
  }

  render(){
    return(
      <header>
        <nav>
          <ul>
            <li>
              <span onClick={() => {
                const target = '/';
                if(Router.pathname !== target && this.props.storeFunc.isShow == true){
                  this.props.storeFunc.target = target;
                  this.props.storeFunc.isShow = false;
                }
              }}>About</span>
            </li>
            <li>
              <span onClick={() => {
                const target = '/works';
                if(Router.pathname !== target && this.props.storeFunc.isShow == true){
                  this.props.storeFunc.target = target;
                  this.props.storeFunc.isShow = false;
                }
              }}>works</span>
            </li>
            <li>
              <span onClick={() => {
                const target = '/contact';
                if(Router.pathname !== target && this.props.storeFunc.isShow == true){
                  this.props.storeFunc.target = target;
                  this.props.storeFunc.isShow = false;
                }
              }}>Contact</span>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
