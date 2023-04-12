import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccountRoutingModule } from "./account-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AccountRoutingModule,
        SharedModule
    ],
})
export class AccountModule {}
