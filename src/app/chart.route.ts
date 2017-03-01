/**
 * Created by Zawar.Shahid on 11/11/2016.
 */


import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ChartComponent} from "./chart/chart.component";

export const chartRoute : Routes = [
  {
    path: "",
    component: ChartComponent
  }
];


