import { Transacao } from '../../controllers/transacao.controller';
import { Operacao } from '../../models/Operacao';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private toast: UtilsService,
        private transacaoController: Transacao
        ){
        this.form = this.formBuilder.group({
            cpf: [''],
            valor: [''],
            operacao: ['Depósito'],
        });
    }

    async deposito() {

        try {

            let operacao: Operacao = <Operacao>this.form.value;
            console.log(operacao);

            await this.transacaoController.deposito(operacao);

            this.toast.toast('Depósito realizado com sucesso!');
            this.router.navigate(['/dashboard']);

        } catch (error: any) {
            this.toast.toast(error.error.message, true);
            this.toast.toast('Não foi possível realizar o depósito!');
        }
    }
}
