import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthController } from 'src/app/controllers/auth.controller'
import { Account } from "src/app/models/Account";
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
    selector: "app-singin",
    templateUrl: "./singin.component.html",
    styleUrls: ["./singin.component.scss"],
})
export class SinginComponent {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authController: AuthController,
        private toast: UtilsService,

        ){

        this.form = this.formBuilder.group({
            cpf: ['', Validators.required,],
            senha: ['', Validators.required],
        });
    }

    async login(){

        localStorage.clear()

        try {
            let response = await this.authController.login(
                <Account>this.form.value
            );

            localStorage.setItem('token', response.token);
            localStorage.setItem('account', JSON.stringify(response));
            localStorage.setItem('cpf', response.cpf);
            localStorage.setItem('nome', response.nome);

            this.router.navigate(['/dashboard']);

        } catch (error: any) {

            this.toast.toast(error.error, true);
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

