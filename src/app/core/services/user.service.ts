import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import apiConfig from "../../../environment/apiConfig";

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(
        private http: HttpClient
    ) {
    }

    getCurrentUser(): Observable<any> {
        return this.http.get<any>(apiConfig.authBaseUrl + '/current-user').pipe();
    }

    login(body: LoginDto): Observable<any> {
        return this.http.post<any>(apiConfig.authBaseUrl + '/signin', body).pipe();
    }

    signup(body: SignupDto): Observable<any> {
        return this.http.post<any>(apiConfig.authBaseUrl + '/signup', body).pipe();
    }

    signout(): Observable<any> {
        return this.http.get<any>(apiConfig.authBaseUrl + '/signout').pipe();
    }

    testAuth(body: any): Observable<any> {
        return this.http.post<any>('https://firebase-auth-five-phi.vercel.app/auth/signup', body).pipe();
    }
}

export class LoginDto {
    email: string;
    password: string;
}

export class SignupDto {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
}