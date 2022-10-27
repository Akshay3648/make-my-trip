import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FlightsComponent } from './components/flights/flights.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { BusComponent } from './components/bus/bus.component';
import { TaxiComponent } from './components/taxi/taxi.component';
import { TrainComponent } from './components/train/train.component';



@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    FlightsComponent,
    HotelsComponent,
    BusComponent,
    TaxiComponent,
    TrainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [HomePageComponent, LoginComponent]
})
export class HomeModule { }
