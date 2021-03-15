import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListadoComponent } from './views/listado/listado.component';
import { EntradaComponent } from './views/listado/entrada/entrada.component';
import { HomeComponent } from './components/home/home.component';
import { EnlacesComponent } from './components/enlaces/enlaces.component';
import {RouterModule, Routes} from '@angular/router';
const rutas: Routes = [
  {
    path: 'enlaces',
    component: EnlacesComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    ListadoComponent,
    EntradaComponent,
    HomeComponent,
    EnlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routing = RouterModule.forRoot(rutas);
