import { action, observable } from 'mobx'
import Router from 'next/router';

const delayFunc = (waitSeconds, someFunction) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(someFunction())
    }, waitSeconds)
  })
}

class StoreFunc {
  @observable isShow = false;
  @observable target = '';


  @action.bound
  open(src){
    Router.push('/' + src)
  }
}

const storeFunc = new StoreFunc();
export default storeFunc;
