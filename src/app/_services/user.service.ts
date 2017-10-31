﻿import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { User } from '../_models/index';


@Injectable()
export class UserService {
    constructor(private http: Http) { }

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
        
        return this.http.get('http://core.app/pages', this.jwt()).map((response: Response) => response.json());
    }
 
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
    
     
}
