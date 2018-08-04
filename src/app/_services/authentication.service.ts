import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json; charset=utf-8')
        headers = headers.append('x-api-key', 'DHCETree');

        return this.http.post<any>(`${environment.apiUrl}/login`,
            { userName: 'raghu.muni', password: 'raghu' }, {headers: headers})
            .pipe(map(user => {
                user = user.data;
                user.sessionId = 'DHCETree';
                if (user && user.sessionId) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
