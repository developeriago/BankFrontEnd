import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Operacao } from '../models/Operacao';

@Injectable({
    providedIn: "root"
})
export class Transacao{

    //private api: string = environment.api;
    private readonly API = 'api'

    constructor( private http: HttpClient){}

    async deposito(operacao: Operacao): Promise<any> {
        return await firstValueFrom(
                    this.http
                    .post(`${this.API}/depositar`, operacao).pipe());
    }

    extratoList(cpf: string): Promise<Operacao[]>{
        return firstValueFrom(
            this.http
            .get<Operacao[]>(`${this.API}/extrato/${cpf}`));
    }


}
