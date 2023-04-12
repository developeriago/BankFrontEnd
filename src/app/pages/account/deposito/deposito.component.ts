
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Transacao } from 'src/app/controllers/transacao.controller';
import { Operacao } from 'src/app/models/Operacao';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.scss']
})
export class DepositoComponent {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private toast: UtilsService,
        private transacaoController: Transacao
        ){

        let cpf: string = localStorage.getItem('cpf')!;

        this.form = this.formBuilder.group({
            cpf: [cpf],
            valor: ['', Validators.required],
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

            this.toast.toast(error.error, true);
            this.toast.toast('Não foi possível realizar o depósito!');
        }
    }

    getErrorMessage(fieldValor: string){

        const field = this.form.get(fieldValor);

        if(field?.hasError('required')){
            return 'Campo obrigatório'
        }

        return 'Campo inválido';

    }

}
