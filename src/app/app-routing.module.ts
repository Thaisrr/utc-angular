import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentationComponent} from "./pages/presentation/presentation.component";
import {DirectivesComponent} from "./pages/directives/directives.component";
import {FormulairesComponent} from "./pages/formulaires/formulaires.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {FormationsComponent} from "./pages/formations/formations.component";

const routes: Routes = [
  {path: '', component: PresentationComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'forms', component: FormulairesComponent},
  {path: 'formations', component: FormationsComponent},
  {path: 'accueil', redirectTo: ''},
  {path: 'acceuil', redirectTo: ''},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
