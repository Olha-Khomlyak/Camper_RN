import {observable, makeObservable, action} from 'mobx'
import { CampsData } from './types';


class CampStore {

    constructor() {
        makeObservable(this)
      }

    @observable loading = false
    @observable camps: CampsData[] = []

    @action addCamp(camp:CampsData) {
      this.camps.push(camp);
    }
    
}

export default new CampStore()