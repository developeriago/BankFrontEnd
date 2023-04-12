import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Transacao } from 'src/app/controllers/transacao.controller';
import { Operacao } from 'src/app/models/Operacao';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.scss']
})
export class SaqueComponent {

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
            valor: [''],
            operacao: ['Saque'],
        });
    }

    async saque() {

        try {

            let operacao: Operacao = <Operacao>this.form.value;
            console.log(operacao);

            await this.transacaoController.saque(operacao);

            this.toast.toast('Saque realizado com sucesso!');
            this.router.navigate(['/dashboard']);

        } catch (error: any) {

            this.toast.toast(error.error, true);
        }
    }

}
