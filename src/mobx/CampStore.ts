import React, { useContext } from 'react';
import {observable, makeObservable, action} from 'mobx'


class CampStore {

    constructor() {
        makeObservable(this)
      }

    @observable counter = 110;



    @action increment() {
        console.log("increment");
        
      this.counter++;
    }
  
    @action decrement() {
      this.counter--;
    }
    
}

export default new CampStore()