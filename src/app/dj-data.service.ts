import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DjDataService {
  neelInfo: string[]=["Neel","10years","9624824802"];

 

  constructor() { }
  getNeelInfo():string[]{
    return this.neelInfo;
  }
}
