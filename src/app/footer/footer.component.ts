import { Component, OnInit } from '@angular/core';
import { DisclaimerText } from '../../assets/data/disclaimer';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  disclaimerText = DisclaimerText;
  copyright = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
