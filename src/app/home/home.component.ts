import { Component, OnInit } from '@angular/core';
import { HomeText } from '../../assets/data/home-text';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homePath: string;
  homeText = HomeText;

  constructor() {}

  ngOnInit() {
    this.loadLogo();
  }


  loadLogo(): void {
    this.homePath = '../assets/img/home-splash.jpg';
  }
}
