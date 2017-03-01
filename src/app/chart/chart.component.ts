import {Component, OnInit, NgModule} from '@angular/core';
import {ChartModule} from "angular2-highcharts";
import {ChartService} from "../chart.service";
import {RouterModule} from "@angular/router";
import {chartRoute} from "../chart.route";
import {CommonModule} from "@angular/common";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  options: Object;
  result: Object;

  constructor(private _chartservice: ChartService) {
    console.log("Chart Component is now loaded.");
    this.options = {
      chart: {
        zoomType: 'x',
        type: "spline"
      },
      title: {
        text: "Volt - Automation Platform."
      },
      subtitle: {
        text: "Trends"
      },
      // data:{
      //   csv: this._chartservice.getCSV() //document.getElementById('csv').innerText
      // },
      xAxis: {
        crosshair: true,
        title: {
          text: "Time Series"
        }
      },
      yAxis: {
        crosshair: true
      },
      series: [
        {
          name: "Data Stream",
          data: _chartservice.getCSV()
        },
        {
          name: "Boiler",
          data: _chartservice.getData2()
        },
        // {
        //   name: "Main Engine",
        //   data: _chartservice.getData3()
        // }
      ],
      exporting: {
        enabled: true
      },
      legend: {
        align: "right",
        verticalAlign: "middle",
        layout: "vertical",
        borderWidths: 10
      },
      tooltip: {
        split: "true"
      },
      plotOptions: {
        series: {
          compare: 'percent',
          showInNavigator: true
        }
      },
      rangeSelector: {
        enabled: true,
        allButtonsEnabled: true,
        buttons: [{
          type: 'hour',
          count: 1,
          text: '1h'
        }, {
          type: 'day',
          count: 1,
          text: '1d'
        }, {
          type: 'month',
          count: 1,
          text: '1m'
        }, {
          type: 'year',
          count: 1,
          text: '1y'
        }, {
          type: 'all',
          text: 'All'
        }],
        inputEnabled: true, // it supports only days
        //selected: 4 // all
      },
      navigator: {
        enabled: "true"
      },
    };

  }

  ngOnInit() {
  }

}




