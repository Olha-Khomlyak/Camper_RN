import {observable, makeObservable, action} from 'mobx'
import { CampsData,CampInfo } from './types';


class CampStore {
    constructor() {
        makeObservable(this)
      }

    @observable loading = false
    @observable camps: CampInfo[] = []

    @action addCamp(camp:CampInfo) {
         // Check if the camp already exists in the array
    const exists = this.camps.some((existingCamp) => existingCamp.name === camp.name);
    if (!exists) {
      this.camps.push(camp);
    } else {
      return
    }
    }
    
}

const campStore = new CampStore();
export default campStore;