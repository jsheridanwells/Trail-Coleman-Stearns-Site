import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NavService {

  constructor(private http: Http) { }

  getNavItems() {
    return http.get('../../assets/data/nav.json')
      .map(data => data.json());
  }
}
