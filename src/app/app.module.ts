import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent], // Componentes que no sean standalone van aquí
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Si usas rutas, agrega tus rutas aquí
    SharedModule,
  ],
  providers: [], // Servicios globales van aquí
  bootstrap: [AppComponent], // Componente raíz
})
export class AppModule {}
