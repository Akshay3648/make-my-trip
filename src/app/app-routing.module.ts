import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { BusComponent } from './modules/home/components/bus/bus.component';
import { FlightsComponent } from './modules/home/components/flights/flights.component';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';
import { HotelsComponent } from './modules/home/components/hotels/hotels.component';
import { LoginComponent } from './modules/home/components/login/login.component';
import { TaxiComponent } from './modules/home/components/taxi/taxi.component';
import { TrainComponent } from './modules/home/components/train/train.component';

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: "full"},
  {path: "home", component: HomePageComponent, children: [
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'flights', component: FlightsComponent
    },
    {
      path: 'hotels', component: HotelsComponent
    },
    {
      path: 'bus', component: BusComponent
    },
    {
      path: 'train', component: TrainComponent
    },
    {
      path: 'taxi', component: TaxiComponent
    }
  ]},
  {path: "**", component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
