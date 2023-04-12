import { Component, OnInit } from "@angular/core";
import { Transacao } from "src/app/controllers/transacao.controller";
import { Operacao } from "src/app/models/Operacao";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})

export class DashboardComponent implements OnInit {

    extrato: Operacao[] = [];
    displayedColumns = ['operacao', 'cpf', 'valor'];
    public saldo = null;

    constructor( private transacaoController: Transacao){}

    ngOnInit(): void {

        this.list();
        this.getSaldo();

    }

    async list(){

        let cpf: string = localStorage.getItem('cpf')!;
        this.extrato = await this.transacaoController.extratoList(cpf);
        console.log(this.extrato)

    }

    async getSaldo(){

        let cpf: string = localStorage.getItem('cpf')!;
        this.saldo = await this.transacaoController.saldo(cpf);
    }
}
