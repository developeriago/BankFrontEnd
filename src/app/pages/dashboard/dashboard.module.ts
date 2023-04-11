import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule

    ],
})
export class DashboardModule {}
