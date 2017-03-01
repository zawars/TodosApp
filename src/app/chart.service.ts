import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {InitChartData} from "./init-charts-data"
import {Observable} from "rxjs";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChartService extends InitChartData {
  data1;
  data2;
  data3;
  result;
  constructor(private http: Http) {
    super();
    console.log("Chart Service initialized.");
    this.data1 = this.load();
    this.data2 = this.load1();
    this.data3 = this.load2();
  }
   extractData(res: Response){
    debugger;
    let body = res.json();
    return body.data || { };
  }
  getData1() {
    return this.data1;
  }

  getData2() {
    return this.data2;
  }

  getData3() {
    return this.data3;
  }
   handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  getCSV() {
    debugger;
    this.http.get("http://services.odata.org/V4/TripPinService/")
      .map(this.extractData)
      .catch(this.handleError);
  }

}
