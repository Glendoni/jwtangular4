// Crazy copy of the app/user.service
// Proves that UserService is an app-wide singleton and only instantiated once
// IFF shared.module follows the `forRoot` pattern
//
// If it didn't, a new instance of UserService would be created
// after each lazy load and the userName would double up.

import { Injectable, Optional } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { User } from '../_models/index';

let nextId = 1;

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable()
export class UserService {
  id = nextId++;
    private _userName = 'Sherlock Holmes';
  constructor(@Optional() config: UserServiceConfig, private http: Http) {
    if (config) { this._userName = config.userName; }
  }

  get userName() {
    // Demo: add a suffix if this service has been created more than once
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._userName + suffix;
  }
     getAll() {
          return this.http.get('http://core.app/home', this.jwt()).map((response: Response) => response.json());
    }
    getById(id: number) {
        return this.http.get('http://core.app/home/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('http://core.app/create', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }
     getPages() {
        console.log('sdfs');
        return this.http.get('http://core.app/pages', this.jwt()).map((response: Response) => response.json());
    }
    private jwt() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }



}
