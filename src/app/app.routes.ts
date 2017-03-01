import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {ChartComponent} from "./chart/chart.component";
import {TodosComponent} from "./todos/todos.component";
import {HomeComponent} from "./home/home.component";
import {XyzComponent} from "./xyz/xyz.component";


export const router : Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "chart",
    loadChildren: "./chart/chart.module#ChartModule1"
  },
  {
    path: "todos",
    component: TodosComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "xyz",
    component: XyzComponent
  }
];


export const routes : ModuleWithProviders = RouterModule.forRoot(router);
