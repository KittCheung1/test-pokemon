import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AuthGuard } from "./guard/auth.guard";
import { LoginPage } from "./login/login.page"
import { PokedexPage } from "./pokedex/pokedex.page";
import { TrainersPage } from "./trainers/trainers.page"

//TrainerProfile Page
//PokeDex + Catch pokemon Page

const routes: Routes = [
    {
        path: "", 
        redirectTo: "/login",
        pathMatch: "full",
        // component: LoginComponent

    },
    { path: "login", component: LoginPage },
    { path: "trainers", component: TrainersPage, canActivate:[AuthGuard] },
    { path: "pokedex", component: PokedexPage }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }