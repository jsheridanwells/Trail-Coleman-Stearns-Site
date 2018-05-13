import { Component, OnInit } from '@angular/core';
import { Services } from '../../assets/data/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services = Services;
  constructor() { }

  ngOnInit() {
  }

}
