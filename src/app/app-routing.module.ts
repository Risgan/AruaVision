import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './website/component/layout/layout.component';
import { ContactenosComponent } from './website/page/contactenos/contactenos.component';
import { HomeComponent } from './website/page/home/home.component';
import { QuienesSomosComponent } from './website/page/quienes-somos/quienes-somos.component';
import { TiendaComponent } from './website/page/tienda/tienda.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LayoutComponent,
    children:
    [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'QuienesSomos',
        component: QuienesSomosComponent
      },
      {
        path: 'tienda',
        component: TiendaComponent,
        pathMatch: 'full'
      },
      {
        path: 'contactenos',
        component: ContactenosComponent,
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
