import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentationComponent} from "./pages/presentation/presentation.component";
import {DirectivesComponent} from "./pages/directives/directives.component";
import {FormulairesComponent} from "./pages/formulaires/formulaires.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {FormationsComponent} from "./pages/formations/formations.component";
import {RxjsComponent} from "./pages/rxjs/rxjs.component";
import {ObservablesComponent} from "./pages/rxjs/observables/observables.component";
import {Subject} from "rxjs";
import {SubjectComponent} from "./pages/rxjs/subject/subject.component";
import {HttpComponent} from "./pages/rxjs/http/http.component";

const routes: Routes = [
  {path: '', component: PresentationComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'forms', component: FormulairesComponent},
  {path: 'formations', component: FormationsComponent},
  {path: 'rxjs', component: RxjsComponent, children: [
      {path: 'observables', component: ObservablesComponent},
      {path: 'subject', component: SubjectComponent},
      {path: 'http', component: HttpComponent},
    ]},
  {path: 'accueil', redirectTo: ''},
  {path: 'acceuil', redirectTo: ''},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
