import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountModule } from '../account.module';
import { SaqueComponent } from './saque.component';
import { SaqueRoutingModule } from './saque-routing.module';

@NgModule({
  declarations: [SaqueComponent],
  imports: [
    CommonModule,
    SaqueRoutingModule,
    SharedModule,
  ]
})
export class SaqueModule { }
