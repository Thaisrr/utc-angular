import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { RainbowPipe } from './utils/pipes/rainbow.pipe';
import { FilterPipe } from './utils/pipes/filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchPipe } from './utils/pipes/search.pipe';
import { FormulairesComponent } from './pages/formulaires/formulaires.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { FormationCardComponent } from './components/formation-card/formation-card.component';
import { AlertComponent } from './components/alert/alert.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { ObservablesComponent } from './pages/rxjs/observables/observables.component';
import { SubjectComponent } from './pages/rxjs/subject/subject.component';
import { HttpComponent } from './pages/rxjs/http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    DirectivesComponent,
    RainbowPipe,
    FilterPipe,
    SearchPipe,
    FormulairesComponent,
    NavigationComponent,
    NotFoundComponent,
    FormationsComponent,
    FormationCardComponent,
    AlertComponent,
    RxjsComponent,
    ObservablesComponent,
    SubjectComponent,
    HttpComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
