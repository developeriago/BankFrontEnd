import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Account } from '../models/Account';

@Injectable({
    providedIn: "root"
})
export class AuthController{

    private readonly API = 'api'

    constructor( private http: HttpClient){}

    async create(account: Account): Promise<any> {
        return await firstValueFrom(
                    this.http
                    .post(`${this.API}/cadastro`, account).pipe());
    }

    async login(account: Account): Promise<any> {

        return await firstValueFrom(
            this.http.post<any>(`${this.API}/login`, account));
    }

}
