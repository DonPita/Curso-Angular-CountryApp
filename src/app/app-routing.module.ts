import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { ByCountryPageComponent } from './countries/pages/by-country-page/by-country-page.component';


const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomePageComponent
  // },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'countries',
    /*Se importan todos los módulos de countries mediante el modulo principal
    porque ya está toda la información en el
                  LAZYLOAD
    */
    loadChildren: () => import('./countries/countries.module')
    .then( m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'countries'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
