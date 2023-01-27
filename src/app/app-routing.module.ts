import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentationComponent} from "./pages/presentation/presentation.component";
import {DirectivesComponent} from "./pages/directives/directives.component";
import {FormulairesComponent} from "./pages/formulaires/formulaires.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {FormationsComponent} from "./pages/formations/formations.component";
import {RxjsComponent} from "./pages/rxjs/rxjs.component";
import {ObservablesComponent} from "./pages/rxjs/observables/observables.component";
import {SubjectComponent} from "./pages/rxjs/subject/subject.component";
import {HttpComponent} from "./pages/rxjs/http/http.component";
import {GamesComponent} from "./pages/games/games.component";
import {GameDetailsComponent} from "./pages/game-details/game-details.component";
import {LoginComponent} from "./pages/login/login.component";
import {SecretComponent} from "./pages/secret/secret.component";
import {AuthGuard} from "./utils/guards/auth.guard";

const routes: Routes = [
  {path: '', component: PresentationComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'forms', component: FormulairesComponent},
  {path: 'formations', component: FormationsComponent},
  {path: 'rxjs', component: RxjsComponent, children: [
      {path: 'observables', component: ObservablesComponent},
      {path: 'subject', component: SubjectComponent},
      {path: 'http', component: HttpComponent},
    ]
  },
  {path: 'games', component: GamesComponent, children: [
      {path: 'details/:id', component: GameDetailsComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'secret', component: SecretComponent, canActivate: [AuthGuard]},
  {path: 'accueil', redirectTo: ''},
  {path: 'acceuil', redirectTo: ''},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
