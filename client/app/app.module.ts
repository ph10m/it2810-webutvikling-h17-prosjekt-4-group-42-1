import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './services/cat.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {CardsService} from './services/cards.service';
import {CardsComponent} from './cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    NotFoundComponent,
    CardsComponent,
  ],
  imports: [
    RoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule
  ],
  providers: [
    CatService, CardsService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
