import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.css']
})
export class AboutDetailComponent implements OnInit {

  person;

  constructor(
    private route: ActivatedRoute,
    private aboutService: AboutService
  ) { }

  ngOnInit() {
    this.person = this.aboutService.getPerson(this.route.snapshot.params.id);
  }

}
