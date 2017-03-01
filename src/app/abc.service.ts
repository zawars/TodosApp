import { Injectable } from '@angular/core';

@Injectable()
export class AbcService {
  i:number;
  constructor() {
    this.i = 0;
  }

  data(){
    return this.i;
  }

  inc(){
    this.i+=5;
  }
}
