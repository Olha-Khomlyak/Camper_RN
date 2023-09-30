import firestore from '@react-native-firebase/firestore';
import { CampsData,CampInfo } from '../../mobx/types';
import CampStore from '../../mobx/CampStore';

export const getData = async () => {
    try {
        const querySnapshot = await firestore().collection('campsites').get();
        const data = querySnapshot.docs.map(x => x.data() as CampInfo)
        console.log("FETCHED DATA:", data);
        
        // Update the observable data with the fetched data
        data.forEach(item => {
            CampStore.addCamp(item)})
        CampStore.loading = false;
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
        CampStore.loading = false;
      }
}