import { Injectable } from '@angular/core';
import { People } from '../assets/data/people';

@Injectable()
export class AboutService {

  constructor() { }

  people = People;

  getPerson(id) {
    return this.people.find(person => person.id == id);
  }

}
