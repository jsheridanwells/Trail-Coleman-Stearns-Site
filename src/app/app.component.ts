import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trail, Coleman, and Stearns, PLLC';
  public logoPath: string;

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.loadLogo();
  }
  loadLogo(): void {
    this.logoPath = '../assets/img/logo.jpg';
  }
}
