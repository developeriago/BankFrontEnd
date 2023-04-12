import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Operacao } from '../models/Operacao';

@Injectable({
    providedIn: "root"
})
export class Transacao{

    private readonly API = 'api'

    constructor( private http: HttpClient){}

    async deposito(operacao: Operacao): Promise<any> {
        return await firstValueFrom(
                    this.http
                    .post(`${this.API}/depositar`, operacao).pipe());
    }

    async saque(operacao: Operacao): Promise<any> {
        return await firstValueFrom(
                    this.http
                    .post(`${this.API}/saque`, operacao).pipe());
    }

    async extratoList(cpf: string): Promise<Operacao[]>{
        return firstValueFrom(
            this.http
            .get<Operacao[]>(`${this.API}/extrato/${cpf}`));
    }

    async saldo(cpf: string): Promise<any>{
        return firstValueFrom(
            this.http.get<any>(`${this.API}/saldo/${cpf}`));

    }

}
