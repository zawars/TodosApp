import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {chartRoute} from "../chart.route";
import {ChartModule} from "angular2-highcharts";
import {ChartComponent} from "./chart.component";
import {ChartService} from "../chart.service";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";


/**
 * Created by Zawar.Shahid on 11/11/2016.
 */


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(chartRoute),
    ChartModule,
    HttpModule
  ],
  declarations: [ChartComponent],
  providers:[ChartService],
  bootstrap: [ChartComponent]
})
export class ChartModule1 {
  constructor(){
    console.log("Chart Module is now loaded.");
  }
}
