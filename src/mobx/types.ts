interface FirestoreGeoPoint {
    _latitude: number;
    _longitude: number;
  }

  interface Features {
    [key: string]: string[];
  }

export interface CampInfo {
id: string;
about: string; 
coordinates:FirestoreGeoPoint;
features: Features
imageURLString:string
name: string
phoneNumber:string
price: string
region: string
webSite: string
}

export interface CampsData {
    [key: number]: CampInfo;
  }
  