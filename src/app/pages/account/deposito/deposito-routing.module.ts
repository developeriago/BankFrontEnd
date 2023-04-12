import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DepositoComponent } from './deposito.component';

const routes: Routes = [
    {
        path: "",
        component: DepositoComponent,
        canActivate: [AuthGuard],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositoRoutingModule { }
