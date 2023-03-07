import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface SignupResponseData {
    id: number,
    name: string,
    username: string,
    role: string
}

@Injectable({providedIn: 'root'})
export class SignupService {
    constructor(private http: HttpClient) {}

    signup(name: string, username:string, password: string, role:string = 'USER') {
        console.log(name, username, password, role);
        
        return this.http.post<SignupResponseData | {message: string}>('https://book-api.novahub.vn/api/v1/users', {
            name: name,
            username: username,
            password: password,
            role: role
        })
    }
}