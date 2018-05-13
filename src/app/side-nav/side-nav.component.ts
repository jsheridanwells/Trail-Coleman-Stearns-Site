import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/nav-service.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {
  navItems = [];
  constructor(navService: NavService) {
    navService.getNavItems().subscribe(
      items => this.navItems = items,
      error => console.error(error)
    )
  }

  ngOnInit() {

  }

}
