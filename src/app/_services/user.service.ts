import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json; charset=utf-8');
        headers = headers.append('x-api-key', 'DHCETree');
        return this.http.get<User[]>(`${environment.apiUrl}/users`, {headers: headers});
    }
}