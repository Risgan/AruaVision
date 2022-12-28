import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/page/home/home.component';
import { LayoutComponent } from './website/component/layout/layout.component';
import { NavComponent } from './website/component/nav/nav.component';
import { FooterComponent } from './website/component/footer/footer.component';
import { QuienesSomosComponent } from './website/page/quienes-somos/quienes-somos.component';
import { TiendaComponent } from './website/page/tienda/tienda.component';
import { ContactenosComponent } from './website/page/contactenos/contactenos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    NavComponent,
    FooterComponent,
    QuienesSomosComponent,
    TiendaComponent,
    ContactenosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
