import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DjDataService {
  info1: string[]=["Neel","10years","9624824802"]

  getInfo1():string[]{
    return this.info1
  }

  constructor() { }
}
