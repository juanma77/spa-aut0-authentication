import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuard } from './services/auth.guard';

// A la ruta de protected le agregamos el AuthGuard para que antes de que el usuario se meta a esa ruta, pase por el AuthGuard y este verifique que está logeado
const ROUTES: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot( ROUTES )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
