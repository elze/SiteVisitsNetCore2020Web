import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatButtonModule, MatIconModule, MatInputModule, MatPaginatorModule, MatTableModule, } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FlatVisitsComponent } from './flat-visits/flat-visits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { FlatVisitsEffects } from './flat-visits/flat-visits.effects';
import { VisitSessionEffects } from './visit-session/visit-session.effects';
import { VisitSessionComponent } from './visit-session/visit-session.component';
import { VisitSessionBlockComponent } from './visit-session-block/visit-session-block.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { PaginatedFlatVisitsEffects } from './flat-visits/flat-visits-paginated.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FlatVisitsComponent,
    VisitSessionComponent,
    VisitSessionBlockComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatButtonModule, MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: 'visit-session/:id/:visitDateTime', component: VisitSessionComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'weather-forecast/:id', component: WeatherForecastComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'flat-visits/:pageNum/size/:pageSize', component: FlatVisitsComponent },
      { path: 'flat-visits', component: FlatVisitsComponent },
      { path: "**", component: HomeComponent },
    ], { enableTracing: true }),
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    EffectsModule.forRoot([FlatVisitsEffects, PaginatedFlatVisitsEffects, VisitSessionEffects])
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: environment.baseHref }, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
