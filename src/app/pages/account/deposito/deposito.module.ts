import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositoRoutingModule } from './deposito-routing.module';
import { DepositoComponent } from './deposito.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DepositoComponent
  ],
  imports: [
    CommonModule,
    DepositoRoutingModule,
    SharedModule
  ]
})
export class DepositoModule { }
