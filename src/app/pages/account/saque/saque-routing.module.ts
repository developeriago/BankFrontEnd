import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SaqueComponent } from "./saque.component";
import { AuthGuard } from "src/app/guards/auth.guard";

const routes: Routes = [
    {
        path: "",
        component: SaqueComponent,
        canActivate: [AuthGuard],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SaqueRoutingModule {}
