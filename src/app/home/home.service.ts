import { Injectable } from '@angular/core';

export class Home {
  constructor(public id: number, public name: string) { }
}

const HOME: Home[] = [
  new Home(21, 'Sam Spade'),
  new Home(22, 'Nick Danger'),
  new Home(23, 'Nancy Drew')
];

const FETCH_LATENCY = 500;

@Injectable()
export class HomeService {

  getContacts() {
    return new Promise<Home[]>(resolve => {
      setTimeout(() => { resolve(HOME); }, FETCH_LATENCY);
    });
  }

  getContact(id: number | string) {
    return this.getContacts()
      .then(heroes => heroes.find(hero => hero.id === +id));
  }
}
