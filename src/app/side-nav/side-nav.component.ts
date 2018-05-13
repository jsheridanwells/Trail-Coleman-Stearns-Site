import { Component, OnInit } from '@angular/core';
import { NavItems } from '../../assets/data/nav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {

  navItems = NavItems;
  constructor() { }

  ngOnInit() {

  }

}
