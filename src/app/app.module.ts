import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { RainbowPipe } from './utils/pipes/rainbow.pipe';
import { FilterPipe } from './utils/pipes/filter.pipe';
import {FormsModule} from "@angular/forms";
import { SearchPipe } from './utils/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    DirectivesComponent,
    RainbowPipe,
    FilterPipe,
    SearchPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
