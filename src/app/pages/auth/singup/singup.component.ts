import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from "@angular/core";
import { Account } from 'src/app/models/Account';
import { AuthController } from 'src/app/controllers/auth.controller'
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
    selector: "app-singup",
    templateUrl: "./singup.component.html",
    styleUrls: ["./singup.component.scss"],
})
export class SingupComponent {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private toast: UtilsService,
        private authController: AuthController
        ){

        this.form = this.formBuilder.group({
            nome: ['', Validators.required],
            cpf: ['', Validators.required],
            senha: ['', Validators.required],
        });
    }

    async createAccount() {

        try {

            let account: Account = <Account>this.form.value;
            await this.authController.create(account);

            this.toast.toast('Usuário cadastrado com sucesso!');
            this.router.navigate(['/login']);

        } catch (error: any) {
            this.toast.toast(error.error, true);
            this.toast.toast('Usuário ja cadastrado!');
        }
    }

    getErrorMessage(fieldname: string){

        const campoCpf = this.form.get(fieldname);

        if(campoCpf?.hasError('required')){
            return 'Campo obrigatório'
        }


        return 'Campo inválido';

    }


}
