import {Component, OnInit} from '@angular/core';
import {AbcService} from "../abc.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AbcService]
})
export class HomeComponent implements OnInit {
  fir; firAgain;
  sec;
  insA;
  insB;
  constructor(private abcservice: AbcService) {
    this.insA = new AbcService();
    this.insB = new AbcService();
    console.log("Home Component is now loaded.");

    this.fir = this.insA.data();
    this.insB.inc();
    this.sec = this.insB.data();
    this.firAgain = this.insA.data();
  }

  ngOnInit() {
  }

}
