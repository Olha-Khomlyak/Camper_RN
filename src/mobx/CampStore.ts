import {observable, makeObservable, action} from 'mobx'
import { CampsData,CampInfo } from './types';


class CampStore {

    constructor() {
        makeObservable(this)
      }

    @observable loading = false
    @observable camps: CampInfo[] = []

    @action addCamp(camp:CampInfo) {
      this.camps.push(camp);
    }
    
}

export default new CampStore()