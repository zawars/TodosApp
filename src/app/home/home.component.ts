import {Component, OnInit} from '@angular/core';
import {AbcService} from "../abc.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AbcService]
})
export class HomeComponent implements OnInit {
  constructor(private abcservice: AbcService) {
    console.log("Home Component is now loaded.");
  }

  ngOnInit() {
  }

}
