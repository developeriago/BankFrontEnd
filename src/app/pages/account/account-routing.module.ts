import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//import { AccountComponent } from "./account.component";
import { AuthGuard } from "src/app/guards/auth.guard";

const routes: Routes = [
    {
        path: "deposito",
        loadChildren: () => import("./deposito/deposito.module").then((module) => module.DepositoModule),

    },
    {
        path: "saque",
        loadChildren: () => import("./saque/saque.module").then((module) => module.SaqueModule),

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountRoutingModule {}
